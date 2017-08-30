using Microsoft.AspNet.Identity.Owin;
using Newtonsoft.Json;
using Ninject;
using RealEstateAgency.Models.Models;
using RealEstateAgency.UI.IdentityManagers;
using RealEstateAgency.UI.ViewModels;
using System;
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

        public AccountController(ReaUserManager userManager, ReaSignInManager signInManager) : base()
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public AccountController() : this(HttpContext.Current.GetOwinContext().Get<ReaUserManager>(), HttpContext.Current.GetOwinContext().Get<ReaSignInManager>())
        {
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
            var user = _userManager.FindAsync(signInInfo.Email, signInInfo.Password).Result;
            if(user.UserName != null)
            {
                var responseCookies = HttpContext.Current.Response.Cookies;
                //var res = await _signInManager.PasswordSignInAsync(signInInfo.Email, signInInfo.Password, false, false);
                var idCookie = new HttpCookie("userId", user.Id.ToString());
                var userNameCookie = new HttpCookie("userName", user.UserName);
                responseCookies.Add(idCookie);
                responseCookies.Add(userNameCookie);
            }


            return await Task.FromResult(Json<ReaUser>(user));
        }

        [HttpGet]
        [Route("SignOut")]
        public void SignOut()
        {
            var requestCookie = HttpContext.Current.Request.Cookies;
            requestCookie.Remove("userId");
            requestCookie.Remove("userName");
        }
    }
}
