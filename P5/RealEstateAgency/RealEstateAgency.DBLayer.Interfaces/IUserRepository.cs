using RealEstateAgency.Models.Models;
using System;

namespace RealEstateAgency.DBLayer.Interfaces
{
    public interface IUserRepository : IDisposable
    {
        ReaUser GetUserById(int userId);

        ReaUser GetUserByName(string userName);

        ReaUser AddUser(ReaUser user);

        ReaUser UpdateUser(ReaUser user);

        void DeleteUser(ReaUser user);
    }
}
