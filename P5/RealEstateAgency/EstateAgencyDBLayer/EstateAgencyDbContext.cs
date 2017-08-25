using RealEstateAgency.DBLayer.Mapping;
using RealEstateAgency.Models.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealEstateAgency.DBLayer
{
    public class EstateAgencyDbContext : DbContext
    {
        public DbSet<Listing> Listings { get; set; }
        public DbSet<ReaUser> Users { get; set; }

        public EstateAgencyDbContext() : base("name=EstateAgencyDB")
        {
            this.Configuration.AutoDetectChangesEnabled = false;
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;
            Database.SetInitializer<EstateAgencyDbContext>(null);
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            var user = new ReaUser();
            var name = user.FirstName;

            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Configurations.Add(new ListingConfig());
            modelBuilder.Configurations.Add(new ReaUserConfig());

            base.OnModelCreating(modelBuilder);
        }
    }
}
