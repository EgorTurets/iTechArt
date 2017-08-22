using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Common;
using System.Data.Entity.Infrastructure;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace RealEstateAgency.UI.Utils
{
    public class AppIdentityDbContext : IdentityDbContext<CustomUser, IdentityRole<int, IdentityUserRole<int>>, int, IdentityUserLogin<int>, IdentityUserRole<int>, IdentityUserClaim<int>>
    {
        public AppIdentityDbContext() : base ("name=EstateAgencyDB")
        {
            this.Configuration.AutoDetectChangesEnabled = false;
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;
            Database.SetInitializer<AppIdentityDbContext>(null);
        }

        public static AppIdentityDbContext Create()
        {

            //Find that need to write here.

            return new AppIdentityDbContext();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Configurations.Add(new CustomUserConfig());

            base.OnModelCreating(modelBuilder);
        }

    }

    class CustomUserConfig : EntityTypeConfiguration<CustomUser>
    {
        public CustomUserConfig()
        {
            HasEntitySetName("Users");
            ToTable("Users");
            Property(u => u.Id).IsRequired().HasColumnType("int").HasColumnName("UserID");
            Property(u => u.FirstName).IsRequired().HasColumnType("nvarchar").HasMaxLength(50).HasColumnName("FirstName");
            Property(u => u.LastName).IsRequired().HasColumnType("nvarchar").HasMaxLength(50).HasColumnName("LastName");
            Property(u => u.UserName).IsRequired().HasColumnType("nvarchar").HasMaxLength(100).HasColumnName("Email");
            Property(u => u.PasswordHash).IsRequired().HasColumnType("nvarchar").HasMaxLength(200).HasColumnName("PasswordHash");
        }
    }

}
