using Microsoft.AspNet.Identity;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Owin;
using RealEstateAgency.UI.IdentityManagers;
using System.Web.Http;

namespace RealEstateAgency.UI
{
    public class Startup
    {
        public void Configuration(IAppBuilder appBuilder)
        {
            var config = new HttpConfiguration();
            WebApiConfig.Register(config);

            appBuilder.CreatePerOwinContext<ReaUserManager>(ReaUserManager.Create);
            appBuilder.CreatePerOwinContext<ReaSignInManager>(ReaSignInManager.Create);

            appBuilder.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
                CookieName = "AspNet.AuthenticationCookie",
                CookieHttpOnly = false,
                LoginPath = new PathString("/Account/LogIn"),

            });
        }
    }
}