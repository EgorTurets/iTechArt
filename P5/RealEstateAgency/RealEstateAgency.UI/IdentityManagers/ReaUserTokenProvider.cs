using Microsoft.AspNet.Identity;
using RealEstateAgency.Models.Models;
using System;
using System.Threading.Tasks;

namespace RealEstateAgency.UI.IdentityManagers
{
    public class ReaUserTokenProvider : IUserTokenProvider<ReaUser, int>
    {
        public async Task<string> GenerateAsync(string purpose, UserManager<ReaUser, int> manager, ReaUser user)
        {
            Guid resetToken = Guid.NewGuid();
            user.ResetToken = resetToken.ToString();
            await manager.UpdateAsync(user);

            return await Task.FromResult<string>(resetToken.ToString());
        }

        public Task<bool> ValidateAsync(string purpose, string token, UserManager<ReaUser, int> manager, ReaUser user)
        {
            return Task.FromResult<bool>(user.ResetToken.Equals(token));
        }

        public Task NotifyAsync(string token, UserManager<ReaUser, int> manager, ReaUser user)
        {
            return Task.FromResult<int>(0);
        }

        public Task<bool> IsValidProviderForUserAsync(UserManager<ReaUser, int> manager, ReaUser user)
        {
            if (manager == null) throw new ArgumentNullException();
            else
            {
                return Task.FromResult<bool>(manager.SupportsUserPassword);
            }
        }
    }
}