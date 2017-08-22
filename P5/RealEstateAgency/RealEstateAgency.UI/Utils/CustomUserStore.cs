using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RealEstateAgency.Models;
using RealEstateAgency.Models.Models;
using Microsoft.AspNet.Identity;

namespace RealEstateAgency.DBLayer
{
    public class CustomUserStore : IUserStore<User, int>
    {
        static readonly List<User> Users = new List<User>();

        public Task CreateAsync(User user)
        {
            return Task.Factory.StartNew(() => Users.Add(user));
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task DeleteAsync(User user)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        public void Dispose()
        {
            throw new NotImplementedException();
        }


        public Task<User> FindByIdAsync(int userId)
        {
            return Task.Factory.StartNew(() => Users.FirstOrDefault(u => u.Id == userId));
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        public Task<User> FindByNameAsync(string userName)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// NOT IMPLEMENT
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public Task UpdateAsync(User user)
        {
            throw new NotImplementedException();
        }
    }
}
