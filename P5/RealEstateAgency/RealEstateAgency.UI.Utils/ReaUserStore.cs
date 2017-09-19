using RealEstateAgency.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using System.Security.Claims;
using RealEstateAgency.BusinessLayer.Interfaces;

namespace RealEstateAgency.UI.Utils
{
    public class ReaUserStore : IUserLoginStore<ReaUser, int>, IUserClaimStore<ReaUser, int>, IUserRoleStore<ReaUser, int>, IUserPasswordStore<ReaUser, int>, IUserSecurityStampStore<ReaUser, int>, IQueryableUserStore<ReaUser, int>, IUserEmailStore<ReaUser, int>, IUserPhoneNumberStore<ReaUser, int>, IUserTwoFactorStore<ReaUser, int>, IUserLockoutStore<ReaUser, int>, IUserStore<ReaUser, int>, IDisposable
    {
        private IUserService _service;

        public ReaUserStore(IUserService service)
        {
            _service = service;
        }

        public Task<ReaUser> FindByIdAsync(int userId)
        {
            return Task.FromResult(_service.GetUserById(userId));
        }

        public Task<ReaUser> FindByNameAsync(string userName)
        {
            return Task.FromResult(_service.GetUserByName(userName));
        }

        public Task<string> GetPasswordHashAsync(ReaUser user)
        {
            return Task.FromResult(FindByIdAsync(user.Id).Result.PasswordHash);
        }

        public Task SetPasswordHashAsync(ReaUser user, string passwordHash)
        {
            user.PasswordHash = passwordHash;

            return Task.FromResult(this.UpdateAsync(user));
        }

        public Task CreateAsync(ReaUser user)
        {
            return Task.FromResult(_service.AddUser(user));
        }

        public Task DeleteAsync(ReaUser user)
        {
            return Task.Factory.StartNew(() => _service.DeleteUser(user));
        }

        public Task UpdateAsync(ReaUser user)
        {
            return Task.FromResult(_service.UpdateUser(user));
        }


        #region Methods for SignInManager

        public Task<bool> GetLockoutEnabledAsync(ReaUser user)
        {
            return Task.FromResult(false);
        }

        public Task<int> GetAccessFailedCountAsync(ReaUser user)
        {
            return Task.FromResult(0);
        }

        public Task<IList<Claim>> GetClaimsAsync(ReaUser user)
        {
            IList<Claim> claims = new List<Claim>();
            return Task.FromResult(claims);
        }

        public Task<IList<string>> GetRolesAsync(ReaUser user)
        {
            IList<string> retList = new List<string>();
            return Task.FromResult(retList);
        }

        public Task<string> GetSecurityStampAsync(ReaUser user)
        {
            return Task.FromResult(String.Empty);
        }

        public Task<bool> GetTwoFactorEnabledAsync(ReaUser user)
        {
            return Task.FromResult(true);
        }

        #endregion

        public Task SetEmailConfirmedAsync(ReaUser user, bool confirmed)
        {
            user.Confirmed = confirmed;
            user.ResetToken = null;
            return Task.FromResult(this.UpdateAsync(user));
        }

        public void Dispose()
        {
        }



        #region Not implemented methods

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        public IQueryable<ReaUser> Users => throw new NotImplementedException();

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="claim"></param>
        /// <returns></returns>
        public Task AddClaimAsync(ReaUser user, Claim claim)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="login"></param>
        /// <returns></returns>
        public Task AddLoginAsync(ReaUser user, UserLoginInfo login)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="roleName"></param>
        /// <returns></returns>
        public Task AddToRoleAsync(ReaUser user, string roleName)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="login"></param>
        /// <returns></returns>
        public Task<ReaUser> FindAsync(UserLoginInfo login)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        public Task<ReaUser> FindByEmailAsync(string email)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<string> GetEmailAsync(ReaUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<bool> GetEmailConfirmedAsync(ReaUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<DateTimeOffset> GetLockoutEndDateAsync(ReaUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<IList<UserLoginInfo>> GetLoginsAsync(ReaUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<string> GetPhoneNumberAsync(ReaUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<bool> GetPhoneNumberConfirmedAsync(ReaUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<bool> HasPasswordAsync(ReaUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<int> IncrementAccessFailedCountAsync(ReaUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="roleName"></param>
        /// <returns></returns>
        public Task<bool> IsInRoleAsync(ReaUser user, string roleName)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="claim"></param>
        /// <returns></returns>
        public Task RemoveClaimAsync(ReaUser user, Claim claim)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="roleName"></param>
        /// <returns></returns>
        public Task RemoveFromRoleAsync(ReaUser user, string roleName)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="login"></param>
        /// <returns></returns>
        public Task RemoveLoginAsync(ReaUser user, UserLoginInfo login)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task ResetAccessFailedCountAsync(ReaUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="email"></param>
        /// <returns></returns>
        public Task SetEmailAsync(ReaUser user, string email)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="enabled"></param>
        /// <returns></returns>
        public Task SetLockoutEnabledAsync(ReaUser user, bool enabled)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="lockoutEnd"></param>
        /// <returns></returns>
        public Task SetLockoutEndDateAsync(ReaUser user, DateTimeOffset lockoutEnd)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="phoneNumber"></param>
        /// <returns></returns>
        public Task SetPhoneNumberAsync(ReaUser user, string phoneNumber)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="confirmed"></param>
        /// <returns></returns>
        public Task SetPhoneNumberConfirmedAsync(ReaUser user, bool confirmed)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="stamp"></param>
        /// <returns></returns>
        public Task SetSecurityStampAsync(ReaUser user, string stamp)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="enabled"></param>
        /// <returns></returns>
        public Task SetTwoFactorEnabledAsync(ReaUser user, bool enabled)
        {
            throw new NotImplementedException();
        }

        #endregion

    }
}
