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
        private IUserStore<CustomUser, int> _store;

        public CustomUserManager(IUserStore<CustomUser, int> store) : base(store)
        {
            _store = store;
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


        //=======Redefinition of necessary methods=======

        public override Task<CustomUser> FindByIdAsync(int userId)
        {

            return Task.Factory.StartNew(() => this.Users.FirstOrDefault(u => u.Id == userId));
        }

        public override Task<CustomUser> FindByNameAsync(string userName)
        {

            return Task.Factory.StartNew(() => this.Users.FirstOrDefault(u => u.UserName.Equals(userName, StringComparison.OrdinalIgnoreCase)));
        }

        public override Task<bool> CheckPasswordAsync(CustomUser user, string password)
        {
            string passwordHash = this.PasswordHasher.HashPassword(password);

            return Task<bool>.Factory.StartNew((() => passwordHash.Equals(user.PasswordHash)));
        }


        //===Add an add-on result check===
        public override Task<IdentityResult> CreateAsync(CustomUser user, string password)
        {
            if (this.Users.FirstOrDefault(u => u.UserName.Equals(user.UserName, StringComparison.OrdinalIgnoreCase)) != null)
            {
                IdentityResult falledResult = new IdentityResult("A user with this Email already exists");

                return Task.FromResult(falledResult);
            }
            user.PasswordHash = this.PasswordHasher.HashPassword(password);

            _store.CreateAsync(user);

            return Task.FromResult(IdentityResult.Success);
        }

        public override Task<IdentityResult> ChangePasswordAsync(int userId, string currentPassword, string newPassword)
        {
            CustomUser user = FindByIdAsync(userId).Result;
            if (CheckPasswordAsync(user, currentPassword).Result)
            {
                user.PasswordHash = this.PasswordHasher.HashPassword(newPassword);

                return Task.FromResult(IdentityResult.Success);
            }

            return Task.FromResult(new IdentityResult("Invalid password"));
        }



    }
}
