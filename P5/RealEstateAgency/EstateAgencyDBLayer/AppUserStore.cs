using RealEstateAgency.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using System.Security.Claims;
using System.Transactions;

namespace RealEstateAgency.DBLayer
{
    public class AppUserStore : ICustomUserStore
    {
        private EstateAgencyDbContext _context;

        public AppUserStore()
        {
            _context = new EstateAgencyDbContext();
        }


        public IQueryable<AppUser> Users => _context.Users;

        public Task<AppUser> FindByIdAsync(int userId)
        {

            return Task.FromResult(_context.Users.FirstOrDefault(u => u.Id == userId));
        }

        public Task<AppUser> FindByNameAsync(string userName)
        {

            return Task.FromResult(_context.Users.FirstOrDefault(u => u.UserName.Equals(userName, StringComparison.OrdinalIgnoreCase)));
        }

        public Task<string> GetPasswordHashAsync(AppUser user)
        {

            return Task.FromResult(_context.Users.FirstOrDefault(u => u.Id == user.Id).PasswordHash);
        }

        public Task SetPasswordHashAsync(AppUser user, string passwordHash)
        {
            using (var tran = new TransactionScope(TransactionScopeOption.Required))
            {
                AppUser userNote = _context.Users.FirstOrDefault(u => u.Id == user.Id);
                if (userNote == null)
                {
                    return Task.FromResult(false);
                }
                userNote.PasswordHash = passwordHash;
                _context.Entry(userNote).State = System.Data.Entity.EntityState.Modified;

                return _context.SaveChangesAsync();
            }
        }

        //Create, Delete, Update return 2 different types (bool || int)

        public Task CreateAsync(AppUser user)
        {
            if (_context.Users.FirstOrDefault(u => u.UserName.Equals(user.UserName, StringComparison.OrdinalIgnoreCase)) != null)
            {

                return Task.FromResult(false);
            }
            _context.Set<AppUser>().Add(user);

            return _context.SaveChangesAsync();
        }

        public Task DeleteAsync(AppUser user)
        {
            using (var tran = new TransactionScope(TransactionScopeOption.Required))
            {
                AppUser userNote = _context.Users.FirstOrDefault(u => u.Id == user.Id);
                if (userNote == null)
                {

                    return Task.FromResult(false);
                }
                _context.Users.Remove(userNote);

                return _context.SaveChangesAsync();
            }
        }

        public Task UpdateAsync(AppUser user)
        {
            using (var tran = new TransactionScope(TransactionScopeOption.Required))
            {
                AppUser userNote = _context.Users.FirstOrDefault(u => u.Id == user.Id);
                if (userNote == null)
                {

                    return Task.FromResult(false);
                }
                userNote = user;
                _context.Entry(userNote).State = System.Data.Entity.EntityState.Modified;

                return _context.SaveChangesAsync();
            }
        }

        public void Dispose()
        {
            _context.Dispose(); ;
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
