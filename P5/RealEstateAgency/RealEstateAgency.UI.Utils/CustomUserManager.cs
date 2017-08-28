using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Ninject;
using RealEstateAgency.BusinessLayer;
using RealEstateAgency.DBLayer;
using RealEstateAgency.Models.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace RealEstateAgency.UI.Utils
{
    public class CustomUserManager : UserManager<ReaUser, int>
    {
        private ReaUserStore _store;

        public CustomUserManager(ReaUserStore store) : base(store)
        {
            _store = store;
        }

        public static CustomUserManager Create(IdentityFactoryOptions<CustomUserManager> options, IOwinContext context)
        {

            var kernel = context.Get<IKernel>();
            //var manager = new CustomUserManager(context.Get<IKernel>().Get<ReaUserStore>());
            var manager = new CustomUserManager(new ReaUserStore (new UserService(new UserRepository())));

            manager.PasswordValidator = new PasswordValidator
            {
                RequiredLength = 8
            };
            

            return manager;
        }


        //======= Redefinition of necessary methods =======

        public override Task<ReaUser> FindByIdAsync(int userId)
        {
            return Task.Factory.StartNew(() => this.Users.FirstOrDefault(u => u.Id == userId));
        }

        public override Task<ReaUser> FindByNameAsync(string userName)
        {
            return Task.Factory.StartNew(() => this.Users.FirstOrDefault(u => u.UserName.Equals(userName, StringComparison.OrdinalIgnoreCase)));
        }

        public override Task<bool> CheckPasswordAsync(ReaUser user, string password)
        {
            string passwordHash = this.PasswordHasher.HashPassword(password);

            return Task<bool>.Factory.StartNew((() => passwordHash.Equals(user.PasswordHash)));
        }

        public override Task<IdentityResult> ChangePasswordAsync(int userId, string currentPassword, string newPassword)
        {
            ReaUser user = FindByIdAsync(userId).Result;
            if (CheckPasswordAsync(user, currentPassword).Result)
            {
                user.PasswordHash = this.PasswordHasher.HashPassword(newPassword);

                return Task.FromResult(IdentityResult.Success);
            }

            return Task.FromResult(new IdentityResult("Invalid password"));
        }

        //=== Add an add-on result check ===
        public override Task<IdentityResult> CreateAsync(ReaUser user, string password)
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

        public override Task<IdentityResult> DeleteAsync(ReaUser user)
        {
            if (this.Store.FindByNameAsync(user.UserName).Result == null)
            {
                IdentityResult falledResult = new IdentityResult("User not found");

                return Task.FromResult(falledResult);
            }

            this.Store.DeleteAsync(user);

            return Task.FromResult(IdentityResult.Success);
        }

        public override Task<IdentityResult> UpdateAsync(ReaUser user)
        {
            if (this.Store.FindByNameAsync(user.UserName).Result == null)
            {
                IdentityResult falledResult = new IdentityResult("User not found");

                return Task.FromResult(falledResult);
            }

            this.Store.UpdateAsync(user);

            return Task.FromResult(IdentityResult.Success);
        }

        public override Task<ReaUser> FindAsync(string userName, string password)
        {
            ReaUser user = this.Store.FindByNameAsync(userName).Result;
            if (user == null)
            {

                return null;
            }

            string passHash = this.PasswordHasher.HashPassword(password);

            return user.PasswordHash.Equals(passHash) ? Task.FromResult(user) : null;
        }

        //=== You will not need after the removal of the field _store ===
        protected override void Dispose(bool disposing)
        {
            _store.Dispose();
            base.Dispose(disposing);
        }

    }
}
