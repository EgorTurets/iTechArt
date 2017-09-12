using Microsoft.AspNet.Identity;

namespace RealEstateAgency.Models.Models
{
    public class ReaUser : IUser<int>
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PasswordHash { get; set; }

        public bool Confirmed { get; set; }

        public string ResetToken { get; set; }
    }
}