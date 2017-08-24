using RealEstateAgency.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using System.Security.Claims;
using System.Transactions;
using RealEstateAgency.Models;
using RealEstateAgency.BusinessLayer;
using RealEstateAgency.DBLayer;

namespace RealEstateAgency.UI.Utils
{
    public class CustomUserStore : ICustomUserStore
    {
        private IStockService _service = new StockService(new StockRepository());


        public IQueryable<AppUser> Users => _service.GetAllUsers().AsQueryable();

        public Task<AppUser> FindByIdAsync(int userId)
        {

            return Task.FromResult(_service.GetUserById(userId));
        }

        public Task<AppUser> FindByNameAsync(string userName)
        {

            return Task.FromResult(_service.GetUserByName(userName));
        }

        public Task<string> GetPasswordHashAsync(AppUser user)
        {

            return Task.FromResult(FindByIdAsync(user.Id).Result.PasswordHash);
        }

        public Task SetPasswordHashAsync(AppUser user, string passwordHash)
        {
            user.PasswordHash = passwordHash;

            return Task.FromResult(_service.UpdateUser(user));
        }

        //Create, Delete, Update return 2 different types (bool || int)

        public Task CreateAsync(AppUser user)
        {

            return Task.FromResult(_service.AddUser(user));
        }

        public Task DeleteAsync(AppUser user)
        {

            return Task.FromResult(_service.DeleteUser(user));
        }

        public Task UpdateAsync(AppUser user)
        {

            return Task.FromResult(_service.UpdateUser(user));
        }


        public void Dispose()
        {
        }



        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="claim"></param>
        /// <returns></returns>
        public Task AddClaimAsync(AppUser user, Claim claim)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="login"></param>
        /// <returns></returns>
        public Task AddLoginAsync(AppUser user, UserLoginInfo login)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="roleName"></param>
        /// <returns></returns>
        public Task AddToRoleAsync(AppUser user, string roleName)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="login"></param>
        /// <returns></returns>
        public Task<AppUser> FindAsync(UserLoginInfo login)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        public Task<AppUser> FindByEmailAsync(string email)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<int> GetAccessFailedCountAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<IList<Claim>> GetClaimsAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<string> GetEmailAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<bool> GetEmailConfirmedAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<bool> GetLockoutEnabledAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<DateTimeOffset> GetLockoutEndDateAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<IList<UserLoginInfo>> GetLoginsAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<string> GetPhoneNumberAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<bool> GetPhoneNumberConfirmedAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<IList<string>> GetRolesAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<string> GetSecurityStampAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<bool> GetTwoFactorEnabledAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<bool> HasPasswordAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task<int> IncrementAccessFailedCountAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="roleName"></param>
        /// <returns></returns>
        public Task<bool> IsInRoleAsync(AppUser user, string roleName)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="claim"></param>
        /// <returns></returns>
        public Task RemoveClaimAsync(AppUser user, Claim claim)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="roleName"></param>
        /// <returns></returns>
        public Task RemoveFromRoleAsync(AppUser user, string roleName)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="login"></param>
        /// <returns></returns>
        public Task RemoveLoginAsync(AppUser user, UserLoginInfo login)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task ResetAccessFailedCountAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="email"></param>
        /// <returns></returns>
        public Task SetEmailAsync(AppUser user, string email)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="confirmed"></param>
        /// <returns></returns>
        public Task SetEmailConfirmedAsync(AppUser user, bool confirmed)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="enabled"></param>
        /// <returns></returns>
        public Task SetLockoutEnabledAsync(AppUser user, bool enabled)
        {
            throw new NotImplementedException();
        }

       /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="lockoutEnd"></param>
        /// <returns></returns>
        public Task SetLockoutEndDateAsync(AppUser user, DateTimeOffset lockoutEnd)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="phoneNumber"></param>
        /// <returns></returns>
        public Task SetPhoneNumberAsync(AppUser user, string phoneNumber)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="confirmed"></param>
        /// <returns></returns>
        public Task SetPhoneNumberConfirmedAsync(AppUser user, bool confirmed)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="stamp"></param>
        /// <returns></returns>
        public Task SetSecurityStampAsync(AppUser user, string stamp)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <param name="enabled"></param>
        /// <returns></returns>
        public Task SetTwoFactorEnabledAsync(AppUser user, bool enabled)
        {
            throw new NotImplementedException();
        }
    }
}
