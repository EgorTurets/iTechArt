using EstateAgencyModels.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EstateAgencyDBLayer.Mapping
{
    class UserConfig : EntityTypeConfiguration<User>
    {
        public UserConfig()
        {
            HasEntitySetName("Users");
            ToTable("Users").HasKey(u => u.GetIntID);

            Property(u => u.GetIntID).IsRequired().HasColumnType("int").HasColumnName("UserID");
            Property(u => u.Email).IsRequired().HasColumnType("nvarchar").HasMaxLength(100).HasColumnName("Email");
            Property(u => u.FirstName).IsRequired().HasColumnType("nvarchar").HasMaxLength(50).HasColumnName("FirstName");
            Property(u => u.LastName).IsRequired().HasColumnType("nvarchar").HasMaxLength(50).HasColumnName("LastName");
            Property(u => u.PasswordHash).IsRequired().HasColumnName("nvarchar").HasMaxLength(200).HasColumnName("PassHash");

            HasRequired(u => u.Role).WithMany(r => r.Users).HasForeignKey(u => u.UserRoleID);
        }
    }
}
