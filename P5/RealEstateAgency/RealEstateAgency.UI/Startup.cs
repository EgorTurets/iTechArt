using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using RealEstateAgency.UI.Utils;
using System.Web.Http;
using Ninject.Web.Common.OwinHost;
using RealEstateAgency.UI.App_Start;
using Ninject.Web.WebApi.OwinHost;
using Ninject;
using Microsoft.Owin;

namespace RealEstateAgency.UI
{
    public class Startup
    {
        public void Configuration(IAppBuilder appBuilder)
        {
            var config = new HttpConfiguration();
            WebApiConfig.Register(config);

            IKernel kernel = NinjectWebCommon.CreateKernel();

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