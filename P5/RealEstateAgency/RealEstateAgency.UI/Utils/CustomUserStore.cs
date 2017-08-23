using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RealEstateAgency.Models;
using RealEstateAgency.Models.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;
using System.Transactions;

namespace RealEstateAgency.UI.Utils
{
    public class CustomUserStore : UserStore<CustomUser, IdentityRole<int, IdentityUserRole<int>>, int, IdentityUserLogin<int>, IdentityUserRole<int>, IdentityUserClaim<int>>
    {
        private AppIdentityDbContext _context;

        public CustomUserStore(AppIdentityDbContext context) : base(context)
        {
            _context = context;
        }

        //CreateAsync return 2 different types (bool || int)

        public override Task CreateAsync(CustomUser user)
        {
            if (_context.Users.FirstOrDefault(u => u.UserName.Equals(user.UserName, StringComparison.OrdinalIgnoreCase)) != null)
            {
                return Task.FromResult(false);
            }
            _context.Set<CustomUser>().Add(user);

            return _context.SaveChangesAsync();
        }

        public override Task UpdateAsync(CustomUser user)
        {
            using (var tran = new TransactionScope(TransactionScopeOption.Required))
            {
                CustomUser userNote = _context.Users.FirstOrDefault(u => u.Id == user.Id);
                if (userNote == null)
                {
                    return Task.FromResult(false);
                }
                userNote = user;
                _context.Entry(userNote).State = System.Data.Entity.EntityState.Modified;

                return _context.SaveChangesAsync();
            }
        }

        public override Task DeleteAsync(CustomUser user)
        {
            using (var tran = new TransactionScope(TransactionScopeOption.Required))
            {
                CustomUser userNote = _context.Users.FirstOrDefault(u => u.Id == user.Id);
                if (userNote == null)
                {
                    return Task.FromResult(false);
                }
                _context.Users.Remove(userNote);

                return _context.SaveChangesAsync();
            }
        }
    }
}
