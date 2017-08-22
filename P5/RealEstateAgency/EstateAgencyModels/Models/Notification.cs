using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealEstateAgency.Models.Models
{
    public class Notification
    {
        [Key]
        public int NoticeID { get; set; }

        [Required]
        public string Title { get; set; }

        public string Description { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        [Range(0, Int32.MaxValue)]
        public decimal Price { get; set; }

        [Required]
        [Range(0, double.MaxValue)]
        public double Metric { get; set; }

        [Required]
        public bool ForRent { get; set; }

        //Foreign Key to Users table
        [Required]
        public int ProprietorID { get; set; }

    }
}
