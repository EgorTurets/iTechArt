using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Microsoft.Owin.Security;
using RealEstateAgency.Models.Models;

namespace RealEstateAgency.UI.IdentityManagers
{
    public class ReaSignInManager : SignInManager<ReaUser, int>
    {
        private UserManager<ReaUser, int> _userManager;

        public ReaSignInManager(UserManager<ReaUser, int> userManager, IAuthenticationManager authenticationManager) : base(userManager, authenticationManager)
        {
            _userManager = userManager;
        }

        public static ReaSignInManager Create(IdentityFactoryOptions<ReaSignInManager> options, IOwinContext context)
        {
            return new ReaSignInManager(context.GetUserManager<ReaUserManager>(), context.Authentication);
        }

    }
}