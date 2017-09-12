using RealEstateAgency.DBLayer.Interfaces;
using RealEstateAgency.Models.Models;
using System;
using System.Linq;

namespace RealEstateAgency.DBLayer
{
    public class UserRepository : IUserRepository
    {
        private EstateAgencyDbContext _context;

        public UserRepository()
        {
            _context = new EstateAgencyDbContext();
        }

        public ReaUser GetUserById(int userId)
        {
            return _context.Users.FirstOrDefault(u => u.Id == userId);
        }

        public ReaUser GetUserByName(string userName)
        {
            return _context.Users.FirstOrDefault(u => u.UserName.Equals(userName, StringComparison.OrdinalIgnoreCase));
        }

        public ReaUser AddUser(ReaUser user)
        {
            if (GetUserByName(user.UserName) != null)
            {
                throw new ApplicationException("A user with this Email already exists");
            }
            _context.Set<ReaUser>().Add(user);
            _context.SaveChangesAsync();

            return user;
        }

        public ReaUser UpdateUser(ReaUser user)
        {
            ReaUser userNote = GetUserById(user.Id);
            if (userNote == null)
            {
                throw new ApplicationException("User not found");
            }
            userNote.FirstName = user.FirstName;
            userNote.LastName = user.LastName;
            userNote.PasswordHash = user.PasswordHash;
            userNote.UserName = user.UserName;
            _context.Entry(userNote).State = System.Data.Entity.EntityState.Modified;

            return GetUserById(userNote.Id);
        }

        public void DeleteUser(ReaUser user)
        {
            ReaUser userNote = GetUserById(user.Id);
            if (userNote == null)
            {
                throw new ApplicationException("User not found");
            }
            _context.Users.Remove(userNote);
            _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
