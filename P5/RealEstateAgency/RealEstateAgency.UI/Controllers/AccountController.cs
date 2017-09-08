using Microsoft.Ajax.Utilities;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Newtonsoft.Json;
using RealEstateAgency.Models.Models;
using RealEstateAgency.UI.IdentityManagers;
using RealEstateAgency.UI.ViewModels;
using System.Net;
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

        public AccountController() : base()
        {
            _userManager = HttpContext.Current.GetOwinContext().Get<ReaUserManager>();
            _signInManager = HttpContext.Current.GetOwinContext().Get<ReaSignInManager>();
        }

        [HttpPost]
        [Route("AddUser")]
        public IHttpActionResult AddUser(RegisterViewModel newUser)
        {
            if (!this.ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            ReaUser reaUser = new ReaUser
            {
                FirstName = newUser.FirstName,
                LastName = newUser.LastName,
                UserName = newUser.Email
            };

            var createResult = _userManager.CreateAsync(reaUser, newUser.Password);

            if(!createResult.Result.Succeeded)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError); 
            }
            var json = JsonConvert.SerializeObject(reaUser);

            return Json<RegisterViewModel>(newUser);
        }

        [HttpPost]
        [Route("SignIn")]
        public async Task<IHttpActionResult> SignIn(SignInViewModel signInInfo)
        {
            var user = _userManager.FindByNameAsync(signInInfo.Email).Result;
            if(user.UserName == null)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
            var signInStatus = _signInManager.PasswordSignInAsync(signInInfo.Email, signInInfo.Password, false, false).Result;
            if (signInStatus != SignInStatus.Success)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
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
    }
}
