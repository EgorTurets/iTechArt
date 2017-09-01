using System.ComponentModel.DataAnnotations;

namespace RealEstateAgency.UI.ViewModels
{
    public class ListingViewModel
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        [Range(0, int.MaxValue)]
        public decimal Price { get; set; }

        [Required]
        [Range(0, double.MaxValue)]
        public double Metric { get; set; }

        [Required]
        public bool ForRent { get; set; }
    }
}