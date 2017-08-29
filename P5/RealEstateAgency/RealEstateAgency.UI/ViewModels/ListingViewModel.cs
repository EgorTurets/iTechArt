namespace RealEstateAgency.UI.ViewModels
{
    public class ListingViewModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Address { get; set; }

        public decimal Price { get; set; }

        public double Metric { get; set; }

        public bool ForRent { get; set; }
    }
}