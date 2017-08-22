using Microsoft.AspNet.Identity;
using RealEstateAgency.Models;
using RealEstateAgency.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealEstateAgency.DBLayer
{
    public class CustomUserManager : UserManager<IUser>, ICustomUserManager<IUser>
    {
        public CustomUserManager(IUserStore<IUser> store) : base(store)
        {
        }
    }
}
