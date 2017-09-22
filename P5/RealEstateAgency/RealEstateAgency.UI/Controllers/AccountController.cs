using Microsoft.Ajax.Utilities;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using NLog;
using RealEstateAgency.Models.Models;
using RealEstateAgency.UI.IdentityManagers;
using RealEstateAgency.UI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace RealEstateAgency.UI.Controllers
{
    [RoutePrefix("API/Account")]
    public class AccountController : ApiController
    {
        private ReaUserManager _userManager;
        private ReaSignInManager _signInManager;
        private static Logger logger = LogManager.GetCurrentClassLogger();

        public AccountController(ReaUserManager userManager, ReaSignInManager signInManager) : base()
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public AccountController() : this(HttpContext.Current.GetOwinContext().Get<ReaUserManager>(),
            HttpContext.Current.GetOwinContext().Get<ReaSignInManager>())
        {
        }

        [HttpPost]
        [Route("AddUser")]
        public  IHttpActionResult AddUser(RegisterViewModel newUser)
        {
            if (!this.ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            ReaUser reaUser = new ReaUser
            {
                FirstName = newUser.FirstName,
                LastName = newUser.LastName,
                UserName = newUser.Email,
                Confirmed = false,
                PasswordIsReset = false
            };

            var createResult =  _userManager.CreateAsync(reaUser, newUser.Password).Result;
            if(!createResult.Succeeded)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError); 
            }

            ReaUser addedUser =  _userManager.FindByNameAsync(newUser.Email).Result;

            string confirmationToken =  _userManager.GenerateEmailConfirmationTokenAsync(addedUser.Id).Result;

            string confirmationUlr = Url.Link("ConfirmReg", new {id = addedUser.Id, token = confirmationToken});

            logger.Trace("Click for confirm registration: " + confirmationUlr);

            return Json(new
            {
                message = "Please, confirm registration in Log file"
            });
        }

        [HttpGet]
        [Route("ConfirmRegistration", Name = "ConfirmReg")]
        public async Task<IHttpActionResult> ConfirmRegistration(int id, string token)
        {
            var confirmResult = await _userManager.ConfirmEmailAsync(id, token);
            if (!confirmResult.Succeeded)
            {
                return BadRequest(confirmResult.Errors.FirstOrDefault());
            }
 
            return await Task.FromResult(Redirect(new Uri("http://rea.com/login")));
        }

        [HttpPost]
        [Route("SendNewEmail")]
        public async Task<IHttpActionResult> SendNewEmail(string email)
        {
            ReaUser user = await _userManager.FindByNameAsync(email);
            if (user == null)
            {
                return BadRequest("User not found");
            }
            if (!user.Confirmed)
            {
                string confirmationUlr = Url.Link("ConfirmReg", new { id = user.Id, token = user.ResetToken });
                logger.Trace("Click for confirm registration: " + confirmationUlr);

                return Json(new
                {
                    Message = "Letter re-sent to the Log file"
                });
            }
            if (user.PasswordIsReset)
            {
                string confirmationUlr = Url.Link("NotAPI", new { pageName = "ChangePass", id = user.Id, token = user.ResetToken });
                logger.Trace("Follow the link to continue: " + confirmationUlr);

                return Json(new
                {
                    Message = "Letter re-sent to the Log file"
                });
            }

            return BadRequest("Error. Invalid operation");
        }

        [HttpPost]
        [Route("SignIn")]
        public async Task<IHttpActionResult> SignIn(SignInViewModel signInInfo)
        {
            var user = _userManager.FindByNameAsync(signInInfo.Email).Result;
            if(user.UserName == null)
            {
                return await Task.FromResult(BadRequest("Invalid Email"));
            }
            if (!user.Confirmed)
            {
                return await Task.FromResult(BadRequest("Your account not confirmed!"));
            }

            var signInStatus = _signInManager.PasswordSignInAsync(signInInfo.Email, signInInfo.Password, false, false).Result;
            if (signInStatus != SignInStatus.Success)
            {
                return await Task.FromResult(BadRequest("Invalid password"));
            }

            return await Task.FromResult(Json<UserInfoViewModel>(new UserInfoViewModel
                {
                    Email = user.UserName,
                    FirstName = user.FirstName,
                    LastName = user.LastName
                }));
        }

        [HttpGet]
        [Route("SignOut")]
        public void SignOut()
        {
            HttpContext.Current.GetOwinContext().Authentication.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
        }

        [HttpGet]
        [Route("UserInfo")]
        [Authorize]
        public async Task<IHttpActionResult> UserInfo()
        {
            var userName = HttpContext.Current.User.Identity.Name;
            if (userName.IsNullOrWhiteSpace())
            {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }
            var user = await _userManager.FindByNameAsync(userName);

            return Json<UserInfoViewModel>(new UserInfoViewModel
            {
                Email = user.UserName,
                FirstName = user.FirstName,
                LastName = user.LastName
            });
        }

        [HttpPost]
        [Route("ResetPassword")]
        public async Task<IHttpActionResult> ResetPassword([FromBody] string email)
        {
            ReaUser user = await _userManager.FindByNameAsync(email);
            if (user == null)
            {
                return BadRequest("User not found");
            }
            if (!user.Confirmed)
            {
                return BadRequest("Error. Invalid operation");
            }
            user.ResetToken = await _userManager.GeneratePasswordResetTokenAsync(user.Id);
            user.PasswordIsReset = true;

            var updateTask = _userManager.UpdateAsync(user);

            string confirmationUlr = Url.Link("NotAPI", new {pageName = "ChangePass", id = user.Id, token = user.ResetToken});

            logger.Trace("Follow the link to continue: " + confirmationUlr);

            HttpContext.Current.GetOwinContext().Authentication.SignOut(DefaultAuthenticationTypes.ApplicationCookie);

            updateTask.Wait();
            return Json(new
            {
                message = "The password was reset. Check the log file"
            });
        }

        [HttpPost]
        [Route("ChangePass", Name = "ChangePass")]
        public async Task<IHttpActionResult> ChangePassword(ChangePassViewModel changePassModel)
        {
            if (!this.ModelState.IsValid)
            {
                IEnumerable<string> errorMessages = from val in this.ModelState.Values
                                                    select val.Errors[0].ErrorMessage;
                return BadRequest(String.Join("\n", errorMessages));
            }
            ReaUser user = await _userManager.FindByIdAsync(changePassModel.UserId);
            if (user.Confirmed && !user.PasswordIsReset)
            {
                return BadRequest("Error. Invalid operation");
            }
            var resetPassResult = await _userManager.ResetPasswordAsync(changePassModel.UserId, changePassModel.ResetToken, changePassModel.NewPassword);
            if (!resetPassResult.Succeeded)
            {
                return BadRequest(resetPassResult.Errors.FirstOrDefault());
            }

            return Json(new
            {
                Message = "The password has been changed"
            });
        }
    }
}
