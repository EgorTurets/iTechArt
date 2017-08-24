using Microsoft.AspNet.Identity.Owin;
using RealEstateAgency.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;

namespace RealEstateAgency.UI.Utils
{
    public class CustomSingInManager : SignInManager<AppUser, int>
    {
        public CustomSingInManager(UserManager<AppUser, int> userManager, IAuthenticationManager authenticationManager) : base(userManager, authenticationManager)
        {
            
        }

    }
}