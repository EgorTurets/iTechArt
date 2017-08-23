using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealEstateAgency.Models.Models
{
    public interface ICustomUserStore : IUserLoginStore<AppUser, int>, IUserClaimStore<AppUser, int>, IUserRoleStore<AppUser, int>, IUserPasswordStore<AppUser, int>, IUserSecurityStampStore<AppUser, int>, IQueryableUserStore<AppUser, int>, IUserEmailStore<AppUser, int>, IUserPhoneNumberStore<AppUser, int>, IUserTwoFactorStore<AppUser, int>, IUserLockoutStore<AppUser, int>, IUserStore<AppUser, int>, IDisposable
    {
    }
}
