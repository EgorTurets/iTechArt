using RealEstateAgency.DBLayer.Mapping;
using RealEstateAgency.Models.Models;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

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
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Configurations.Add(new ListingConfig());
            modelBuilder.Configurations.Add(new ReaUserConfig());

            base.OnModelCreating(modelBuilder);
        }
    }
}
