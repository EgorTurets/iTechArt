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

namespace RealEstateAgency.UI.Utils
{
    public class CustomUserStore : UserStore<CustomUser, IdentityRole<int, IdentityUserRole<int>>, int, IdentityUserLogin<int>, IdentityUserRole<int>, IdentityUserClaim<int>>
    {
        public CustomUserStore(AppIdentityDbContext context) : base(context)
        {
        }
    }
}
