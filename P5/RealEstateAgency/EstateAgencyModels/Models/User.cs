using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EstateAgencyModels.Models
{
    public class User : IUser
    {
        [Key]
        public int GetIntID { get => Int32.Parse(Id); }


        public string Id { get; }
        public string UserName
        {
            get => FirstName + " " + LastName;
            set => throw new ApplicationException("You can not set a UserName. Use FirstName and LastName");
        }

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
