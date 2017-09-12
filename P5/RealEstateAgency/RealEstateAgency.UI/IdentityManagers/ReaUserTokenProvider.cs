using Microsoft.AspNet.Identity;
using RealEstateAgency.Models.Models;
using System;
using System.Threading.Tasks;

namespace RealEstateAgency.UI.IdentityManagers
{
    public class ReaUserTokenProvider : IUserTokenProvider<ReaUser, int>
    {
        public Task<string> GenerateAsync(string purpose, UserManager<ReaUser, int> manager, ReaUser user)
        {
            Guid resetToken = Guid.NewGuid();
            user.ResetToken = resetToken.ToString();
            manager.UpdateAsync(user);
            return Task.FromResult<string>(resetToken.ToString());
        }

        public Task<bool> ValidateAsync(string purpose, string token, UserManager<ReaUser, int> manager, ReaUser user)
        {
            throw new NotImplementedException();
        }

        public Task NotifyAsync(string token, UserManager<ReaUser, int> manager, ReaUser user)
        {
            throw new NotImplementedException();
        }

        public Task<bool> IsValidProviderForUserAsync(UserManager<ReaUser, int> manager, ReaUser user)
        {
            throw new NotImplementedException();
        }
    }
}