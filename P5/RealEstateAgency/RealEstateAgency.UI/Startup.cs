using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Ninject.Web.Common.OwinHost;
using Owin;
using RealEstateAgency.DI;
using RealEstateAgency.UI.IdentityManagers;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Optimization;

[assembly: OwinStartup(typeof(RealEstateAgency.UI.Startup))]

namespace RealEstateAgency.UI
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888

            var config = new HttpConfiguration();
            WebApiConfig.Register(config);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            app.UseNinjectMiddleware(NinjectConfig.CreateKernel);

            app.CreatePerOwinContext<ReaUserManager>(ReaUserManager.Create);
            app.CreatePerOwinContext<ReaSignInManager>(ReaSignInManager.Create);

            app.UseCookieAuthentication(new CookieAuthenticationOptions
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
                        var userIdCookie = context.Identity.GetUserId<int>();

                        var userManager = context.OwinContext.Get<ReaUserManager>();
                        var foundUser = userManager.FindById(userIdCookie);
                        if (foundUser != null)
                        {
                            if (foundUser.UserName.Equals(context.Identity.GetUserName()) && foundUser.Confirmed && !foundUser.PasswordIsReset)
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
