using RealEstateAgency.BusinessLayer.Interfaces;
using RealEstateAgency.DBLayer.Interfaces;
using RealEstateAgency.Models.Models;

namespace RealEstateAgency.BusinessLayer
{
    public class UserService : IUserService
    {
        private IUserRepository _repository;

        public UserService(IUserRepository repository)
        {
            _repository = repository;
        }


        public ReaUser GetUserById(int userId)
        {
            return _repository.GetUserById(userId);
        }

        public ReaUser GetUserByName(string userName)
        {
            return _repository.GetUserByName(userName);
        }

        public ReaUser AddUser(ReaUser user)
        {
            return _repository.AddUser(user);
        }

        public ReaUser UpdateUser(ReaUser user)
        {
            return _repository.UpdateUser(user);
        }

        public void DeleteUser(ReaUser user)
        {
            _repository.DeleteUser(user);
        }
    }
}
