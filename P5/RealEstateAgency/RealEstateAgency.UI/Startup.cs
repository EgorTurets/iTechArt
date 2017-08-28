using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Ninject;
using Ninject.Web.Common.OwinHost;
using Ninject.Web.WebApi.OwinHost;
using Owin;
using RealEstateAgency.DI.App_Start;
using RealEstateAgency.UI.Utils;
using System.Web.Http;

namespace RealEstateAgency.UI
{
    public class Startup
    {
        public void Configuration(IAppBuilder appBuilder)
        {
            var config = new HttpConfiguration();
            WebApiConfig.Register(config);

            NinjectWebCommon.Start();
            IKernel kernel = NinjectWebCommon.Kernel;

            config.DependencyResolver = new Ninject.Web.WebApi.NinjectDependencyResolver(kernel);

            appBuilder.CreatePerOwinContext(() => kernel);

            appBuilder.UseNinjectMiddleware(() => kernel);
            appBuilder.UseNinjectWebApi(config);

            appBuilder.CreatePerOwinContext<CustomUserManager>(CustomUserManager.Create);
            appBuilder.CreatePerOwinContext<CustomSignInManager>(CustomSignInManager.Create);


            appBuilder.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                CookieName = "AspNet.AuthenticationCookie",
                CookieHttpOnly = false,
                LoginPath = new PathString("/Account/LogIn"),

            });
        }
    }
}