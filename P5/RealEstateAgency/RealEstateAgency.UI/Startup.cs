using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Owin;
using RealEstateAgency.UI.App_Start;
using RealEstateAgency.UI.IdentityManagers;
using System;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Optimization;

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
                CookieName = "Rea.Auth",
                CookieHttpOnly = false,
                
                LoginPath = new PathString(),
                Provider = new CookieAuthenticationProvider
                {
                    OnApplyRedirect = context =>
                    {
                        context.Response.StatusCode = 401;
                    },
                    OnValidateIdentity = context => 
                    {
                        var cookies = context.Request.Cookies;
                        var userIdCookie = context.Identity.GetUserId<int>();

                        var userManager = context.OwinContext.Get<ReaUserManager>();
                        var foundUser = userManager.FindById(userIdCookie);
                        if (foundUser != null)
                        {
                            if (foundUser.UserName == context.Identity.GetUserName())
                            {
                                context.OwinContext.Authentication.SignIn(context.Properties, context.Identity);

                                return Task.CompletedTask;
                            } 
                        }
                        context.RejectIdentity();

                        return Task.CompletedTask;
                    }
                }
            });
        }
    }
}