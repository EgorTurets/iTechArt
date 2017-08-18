using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EstateAgencyModels.Models
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

        //Foreign Key
        public int ProprietorID { get; set; }

        //Navigation propertie
        [Required]
        public User Proprietor { get; set; }
    }
}
