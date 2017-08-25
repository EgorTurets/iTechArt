using RealEstateAgency.Models.Models;

namespace RealEstateAgency.BusinessLayer.Interfaces
{
    public interface IUserService
    {
        ReaUser GetUserById(int userId);

        ReaUser GetUserByName(string userName);

        ReaUser AddUser(ReaUser user);

        ReaUser UpdateUser(ReaUser user);

        void DeleteUser(ReaUser user);
    }
}
