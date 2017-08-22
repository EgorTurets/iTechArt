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
    class AppIdentityDbContext : IdentityDbContext<CustomUser, IdentityRole<int, IdentityUserRole<int>>, int, IdentityUserLogin<int>, IdentityUserRole<int>, IdentityUserClaim<int>>
    {
        public AppIdentityDbContext() : base ("name=EstateAgencyDB")
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {


            base.OnModelCreating(modelBuilder);
        }

        public AppIdentityDbContext Create ()
        {
            return new AppIdentityDbContext();
        }
    }

}
