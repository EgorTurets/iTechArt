using System;
using System.ComponentModel.DataAnnotations;

namespace RealEstateAgency.Models.Models
{
    public class Listing
    {
        public int ListingID { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Address { get; set; }

        [Range(0, Int32.MaxValue)]
        public decimal Price { get; set; }

        [Range(0, double.MaxValue)]
        public double Metric { get; set; }

        public bool ForRent { get; set; }

        public int ProprietorID { get; set; }
    }
}
