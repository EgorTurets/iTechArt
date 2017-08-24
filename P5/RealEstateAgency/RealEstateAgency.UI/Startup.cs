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

namespace RealEstateAgency.UI
{
    public class Startup
    {
        public void Configuration(IAppBuilder appBuilder)
        {
            var config = new HttpConfiguration();
            WebApiConfig.Register(config);

            config.DependencyResolver = new NinjectDependencyResolver(NinjectWebCommon.CreateKernel());

            appBuilder.UseNinjectMiddleware(NinjectWebCommon.CreateKernel);
            appBuilder.UseNinjectWebApi(config);


            //appBuilder.CreatePerOwinContext(AppIdentityDbContext.Create);
            appBuilder.CreatePerOwinContext<CustomUserManager>(CustomUserManager.Create /*Need to get constructor from DI*/);
            appBuilder.CreatePerOwinContext<CustomSingInManager>(/*Get constructor from DI*/);

            appBuilder.UseCookieAuthentication(new CookieAuthenticationOptions
            {

            });
        }
    }
}