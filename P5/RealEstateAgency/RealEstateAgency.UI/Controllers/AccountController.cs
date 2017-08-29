using Microsoft.AspNet.Identity.Owin;
using Ninject;
using RealEstateAgency.Models.Models;
using RealEstateAgency.UI.IdentityManagers;
using RealEstateAgency.UI.ViewModels;
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

        //[Route("AddUser")]
        //public IHttpActionResult AddUser(RegisterViewModel newUser)
        //{
        //    if (!this.ModelState.IsValid)
        //    {
        //        return Json<System.Web.Http.ModelBinding.ModelStateDictionary>(this.ModelState);
        //    }

        //    ReaUser reaUser = new ReaUser
        //    {
        //        FirstName = newUser.FirstName,
        //        LastName = newUser.LastName,
        //        UserName = newUser.Email
        //    };

        //    _userManager.CreateAsync(reaUser, newUser.Password);


        //    return Json<RegisterViewModel>(newUser);
        //}

        [HttpPost]
        [Route("SignIn")]
        public IHttpActionResult SignIn(SignInViewModel signInInfo)
        {
            var user = _userManager.FindAsync(signInInfo.Email, signInInfo.Password).Result;
            if(user.UserName != null)
            {
                _signInManager.SignIn(user, false, false);
            }


            return Json<ReaUser>(user);
        }
    }
}
