using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EstateAgencyModels.Models
{
    public class User
    {
        [Key]
        public int IserID { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string PasswordHash { get; set; }

        //Foreign Key
        public int UserRole { get; set; }

        //Navigation propertie
        [Required]
        public Role Role { get; set; }

        public ICollection<Notification> Notifications { get; set; }

        public User ()
        {
            Notifications = new HashSet<Notification>();
        }

    }
}
