using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Owin;
using RealEstateAgency.UI.IdentityManagers;
using System;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace RealEstateAgency.UI
{
    public class Startup
    {
        public void Configuration(IAppBuilder appBuilder)
        {
            var config = new HttpConfiguration();
            WebApiConfig.Register(config);
            //BundleConfig.RegisterBundles(BundleTable.Bundles);

            appBuilder.CreatePerOwinContext<ReaUserManager>(ReaUserManager.Create);
            appBuilder.CreatePerOwinContext<ReaSignInManager>(ReaSignInManager.Create);

            appBuilder.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
                //CookieName = "AspNet.AuthenticationCookie",
                CookieHttpOnly = false,
                LoginPath = new PathString("/"),
                Provider = new CookieAuthenticationProvider
                {
                    OnValidateIdentity = context => 
                    {
                        var cookies = context.Request.Cookies;
                        var userIdCookie = context.Request.Cookies["userId"];

                        var userManager = context.OwinContext.Get<ReaUserManager>();
                        var foundUser = userManager.FindById(Int32.Parse(userIdCookie));
                        if (foundUser != null)
                        {
                            if (foundUser.UserName == context.Request.Cookies["userName"])
                            {
                                return Task.Factory.StartNew(() => context.OwinContext.Authentication.SignIn());
                            } 
                        }

                        return Task.Factory.StartNew(() => context.OwinContext.Authentication.SignOut());
                    }
                }
            });
        }
    }
}