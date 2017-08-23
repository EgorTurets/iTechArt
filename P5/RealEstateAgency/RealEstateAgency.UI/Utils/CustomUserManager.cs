using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using RealEstateAgency.DBLayer;
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
    public class CustomUserManager : UserManager<AppUser, int>
    {
        private IUserStore<AppUser, int> _store;

        public CustomUserManager(IUserStore<AppUser, int> store) : base(store)
        {
            _store = store;
        }

        public static CustomUserManager Create(IdentityFactoryOptions<CustomUserManager> options, IOwinContext context)
        {
            //TODO
            //Here DI will return the instance. Make the right constructor for AppUserStore.
            var manager = new CustomUserManager(new AppUserStore(/*context.Get<AppIdentityDbContext>()*/));

            manager.PasswordValidator = new PasswordValidator
            {
                RequiredLength = 8
            };
            

            return manager;
        }


        //=======Redefinition of necessary methods=======

        public override Task<AppUser> FindByIdAsync(int userId)
        {

            return Task.Factory.StartNew(() => this.Users.FirstOrDefault(u => u.Id == userId));
        }

        public override Task<AppUser> FindByNameAsync(string userName)
        {

            return Task.Factory.StartNew(() => this.Users.FirstOrDefault(u => u.UserName.Equals(userName, StringComparison.OrdinalIgnoreCase)));
        }

        public override Task<bool> CheckPasswordAsync(AppUser user, string password)
        {
            string passwordHash = this.PasswordHasher.HashPassword(password);

            return Task<bool>.Factory.StartNew((() => passwordHash.Equals(user.PasswordHash)));
        }


        //===Add an add-on result check===
        public override Task<IdentityResult> CreateAsync(AppUser user, string password)
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
            AppUser user = FindByIdAsync(userId).Result;
            if (CheckPasswordAsync(user, currentPassword).Result)
            {
                user.PasswordHash = this.PasswordHasher.HashPassword(newPassword);

                return Task.FromResult(IdentityResult.Success);
            }

            return Task.FromResult(new IdentityResult("Invalid password"));
        }

        public override Task<IdentityResult> DeleteAsync(AppUser user)
        {



            return base.DeleteAsync(user);
        }


        //===You will not need after the removal of the field _store.===
        protected override void Dispose(bool disposing)
        {
            _store.Dispose();
            base.Dispose(disposing);
        }

    }
}
