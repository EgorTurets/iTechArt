using Microsoft.AspNet.Identity.Owin;
using Newtonsoft.Json;
using Ninject;
using RealEstateAgency.Models.Models;
using RealEstateAgency.UI.IdentityManagers;
using RealEstateAgency.UI.ViewModels;
using System.Net;
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
            var context = HttpContext.Current.GetOwinContext();
            _userManager = context.Get<ReaUserManager>();
            _signInManager = context.Get<ReaSignInManager>();
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
        public IHttpActionResult SignIn(SignInViewModel signInInfo)
        {
            var user = _userManager.FindAsync(signInInfo.Email, signInInfo.Password).Result;
            if(user.UserName != null)
            {
                //var context = HttpContext.Current.GetOwinContext();
                //var authMng = context.Authentication;
                //authMng.SignIn();

                _signInManager.SignIn(user, false, false);
            }


            return Json<ReaUser>(user);
        }

        [HttpGet]
        [Route("SignOut")]
        public IHttpActionResult SignOut()
        {

            return null;
        }
    }
}
