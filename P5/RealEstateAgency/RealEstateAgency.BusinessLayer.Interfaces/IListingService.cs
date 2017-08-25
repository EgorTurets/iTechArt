using RealEstateAgency.Models.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RealEstateAgency.BusinessLayer.Interfaces
{
    public interface IListingService
    {
        Listing GetListing(int id);
        Task<Listing> GetListingAsync(int id);

        IEnumerable<Listing> SearchListings(decimal minPrice, decimal maxPrice, double minMetric, double maxMetric, bool forRent);
        Task<IEnumerable<Listing>> SearchListingsAsync(decimal minPrice, decimal maxPrice, double minMetric, double maxMetric, bool forRent);

        IEnumerable<Listing> GetAllUserListings(int userID);
        Task<IEnumerable<Listing>> GetAllUserListingsAsync(int userID);

        Listing AddListing(Listing listing);
        Task<Listing> AddListingAsync(Listing listing);

        void RemoveListing(int id);
    }
}
