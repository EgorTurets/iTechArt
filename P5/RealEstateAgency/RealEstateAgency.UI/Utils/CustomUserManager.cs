using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using RealEstateAgency.Models;
using RealEstateAgency.Models.Models;
using RealEstateAgency.UI.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealEstateAgency.UI.Utils
{
    public class CustomUserManager : UserManager<CustomUser, int>
    {
        public CustomUserManager(IUserStore<CustomUser, int> store) : base(store)
        {
        }

        public static CustomUserManager Create(IdentityFactoryOptions<CustomUserManager> options, IOwinContext context)
        {
            var manager = new CustomUserManager(new CustomUserStore(context.Get<AppIdentityDbContext>()));

            manager.PasswordValidator = new PasswordValidator
            {
                RequiredLength = 8
            };

            return manager;
        }

        public override Task<CustomUser> FindAsync(string userName, string password)
        {
            return base.FindAsync(userName, password);
        }

        public override Task<IdentityResult> CreateAsync(CustomUser user)
        {
            return base.CreateAsync(user);
        }
    }
}
