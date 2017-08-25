using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealEstateAgency.Models.Models
{
    public interface ICustomUserStore : IUserLoginStore<ReaUser, int>, IUserClaimStore<ReaUser, int>, IUserRoleStore<ReaUser, int>, IUserPasswordStore<ReaUser, int>, IUserSecurityStampStore<ReaUser, int>, IQueryableUserStore<ReaUser, int>, IUserEmailStore<ReaUser, int>, IUserPhoneNumberStore<ReaUser, int>, IUserTwoFactorStore<ReaUser, int>, IUserLockoutStore<ReaUser, int>, IUserStore<ReaUser, int>, IDisposable
    {
    }
}
