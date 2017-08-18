using EstateAgencyModels.Models;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EstateAgencyModels
{
    public interface ICustomUserStore : IUserStore<User>
    {
        Task<User> FindByEmailAsync(string email);
    }
}