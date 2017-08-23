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
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<AppUser> Users { get; set; }

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

            modelBuilder.Configurations.Add(new NotificationConfig());
            modelBuilder.Configurations.Add(new AppUserConfig());

            base.OnModelCreating(modelBuilder);
        }
    }
}
