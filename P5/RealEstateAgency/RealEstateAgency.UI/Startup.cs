using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using RealEstateAgency.UI.Utils;

namespace RealEstateAgency.UI
{
    public class Startup
    {
        public void Configuration(IAppBuilder appBuilder)
        {
            appBuilder.CreatePerOwinContext(AppIdentityDbContext.Create);
            appBuilder.CreatePerOwinContext<CustomUserManager>(CustomUserManager.Create);

            appBuilder.UseCookieAuthentication(new CookieAuthenticationOptions
            {

            });
        }
    }
}