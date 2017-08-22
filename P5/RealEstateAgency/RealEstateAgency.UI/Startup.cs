using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;

namespace RealEstateAgency.UI
{
    public class Startup
    {
        public void Configuration(IAppBuilder appBuilder)
        {
            appBuilder.UseCookieAuthentication(new CookieAuthenticationOptions
            {

            });
        }
    }
}