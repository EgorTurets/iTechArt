using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using RealEstateAgency.Models.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RealEstateAgency.Models.Models
{
    public class AppUser : IUser<int>
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string PasswordHash { get; set; }

        //Navigation propertie

        public ICollection<Notification> Notifications { get; set; }

        public AppUser()
        {
            Notifications = new HashSet<Notification>();
        }
    }
}