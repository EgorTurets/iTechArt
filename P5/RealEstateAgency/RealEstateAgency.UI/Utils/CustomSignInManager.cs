using Microsoft.AspNet.Identity.Owin;
using RealEstateAgency.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using Microsoft.Owin;

namespace RealEstateAgency.UI.Utils
{
    public class CustomSignInManager : SignInManager<AppUser, int>
    {
        private UserManager<AppUser, int> _userManager;

        public CustomSignInManager(UserManager<AppUser, int> userManager, IAuthenticationManager authenticationManager) : base(userManager, authenticationManager)
        {
            _userManager = userManager;
        }

        public static CustomSignInManager Create(IdentityFactoryOptions<CustomSignInManager> options, IOwinContext context)
        {
            return new CustomSignInManager(context.GetUserManager<CustomUserManager>(), context.Authentication);
        }

    }
}