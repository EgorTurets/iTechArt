using RealEstateAgency.Models.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealEstateAgency.DBLayer.Mapping
{
    class AppUserConfig : EntityTypeConfiguration<AppUser>
    {
        public AppUserConfig()
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
