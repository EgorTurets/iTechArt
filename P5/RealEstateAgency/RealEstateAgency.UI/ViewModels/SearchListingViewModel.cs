using System.ComponentModel.DataAnnotations;

namespace RealEstateAgency.UI.ViewModels
{
    public class SearchListingViewModel
    {
        [Required]
        [Range(0, int.MaxValue)]
        public decimal MinPrice { get; set; }

        [Required]
        [Range(0, int.MaxValue)]
        public decimal MaxPrice { get; set; }

        [Required]
        [Range(0, double.MaxValue)]
        public double MinMetric { get; set; }

        [Required]
        [Range(0, double.MaxValue)]
        public double MaxMetric { get; set; }

        [Required]
        public bool ForRent { get; set; }
    }
}