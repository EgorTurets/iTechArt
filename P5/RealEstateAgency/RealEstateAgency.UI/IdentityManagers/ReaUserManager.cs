using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using RealEstateAgency.Models.Models;
using System.Threading.Tasks;
using Ninject;
using RealEstateAgency.DI;
using RealEstateAgency.UI.Utils;

namespace RealEstateAgency.UI.IdentityManagers
{
    public class ReaUserManager : UserManager<ReaUser, int>
    {
        private ReaUserStore _store;

        public ReaUserManager(ReaUserStore store) : base(store)
        {
            _store = store;
            UserTokenProvider = new ReaUserTokenProvider();
        }

        public static ReaUserManager Create(IdentityFactoryOptions<ReaUserManager> options, IOwinContext context)
        {
            var userStore = NinjectConfig.Kernel.Get<ReaUserStore>();
            var manager = new ReaUserManager(userStore)
            {
                PasswordValidator = new PasswordValidator
                {
                    RequiredLength = 8
                }
            };

            return manager;
        }


        #region Redefinition of necessary methods

        public override Task<ReaUser> FindByIdAsync(int userId)
        {
            return _store.FindByIdAsync(userId);
        }

        public override Task<ReaUser> FindByNameAsync(string userName)
        {
            return _store.FindByNameAsync(userName);
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

        public override Task<ReaUser> FindAsync(string userName, string password)
        {
            ReaUser user = FindByNameAsync(userName).Result;
            if (user == null)
            {

                return Task.FromResult(new ReaUser());
            }

            return CheckPasswordAsync(user, password).Result ? Task.FromResult(user) : Task.FromResult(new ReaUser());
        }

        //=== Add an add-on result check ===
        public override Task<IdentityResult> CreateAsync(ReaUser user, string password)
        {
            if (FindByNameAsync(user.UserName).Result != null)
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
            if (FindByNameAsync(user.UserName).Result == null)
            {
                IdentityResult falledResult = new IdentityResult("User not found");

                return Task.FromResult(falledResult);
            }

            _store.DeleteAsync(user);

            return Task.FromResult(IdentityResult.Success);
        }

        public override Task<IdentityResult> UpdateAsync(ReaUser user)
        {
            if (FindByNameAsync(user.UserName).Result == null)
            {
                IdentityResult falledResult = new IdentityResult("User not found");

                return Task.FromResult(falledResult);
            }

            _store.UpdateAsync(user);

            return Task.FromResult(IdentityResult.Success);
        }

        public override Task<IdentityResult> ResetPasswordAsync(int userId, string token, string newPassword)
        {
            return base.ResetPasswordAsync(userId, token, newPassword);
        }

        protected override void Dispose(bool disposing)
        {
            _store.Dispose();
            base.Dispose(disposing);
        }
        
        #endregion
    }
}
