using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Common;
using System.Data.Entity.Infrastructure;
using System.Data.Entity;

namespace RealEstateAgency.UI.Utils
{
    public class AppIdentityDbContext : IdentityDbContext<CustomUser, IdentityRole<int, IdentityUserRole<int>>, int, IdentityUserLogin<int>, IdentityUserRole<int>, IdentityUserClaim<int>>
    {
        public AppIdentityDbContext() : base ("DefaultConnection")
        {

        }

        public static AppIdentityDbContext Create ()
        {
            return new AppIdentityDbContext();
        }
    }

}
