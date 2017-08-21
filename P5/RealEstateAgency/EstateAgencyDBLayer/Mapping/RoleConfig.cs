using EstateAgencyModels.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EstateAgencyDBLayer.Mapping
{
    public class RoleConfig : EntityTypeConfiguration<Role>
    {
        public RoleConfig()
        {
            HasEntitySetName("Roles");
            ToTable("Roles").HasKey(r => r.RoleID);

            Property(r => r.RoleID).IsRequired().HasColumnType("int").HasColumnName("RoleID");
            Property(r => r.Name).IsRequired().HasColumnType("nvarchar").HasMaxLength(50).HasColumnName("Name");
        }
    }
}
