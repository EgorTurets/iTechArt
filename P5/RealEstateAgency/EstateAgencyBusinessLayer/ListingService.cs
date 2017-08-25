using RealEstateAgency.BusinessLayer.Interfaces;
using RealEstateAgency.DBLayer.Interfaces;
using RealEstateAgency.Models.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RealEstateAgency.BusinessLayer
{
    public class ListingService : IListingService
    {
        private IListingRepository _repository;

        public ListingService(IListingRepository repository)
        {
            _repository = repository;
        }

        public Listing AddListing(Listing listing)
        {
            return _repository.AddListing(listing);
        }

        public async Task<Listing> AddListingAsync(Listing listing)
        {
            return await _repository.AddListingAsync(listing);
        }

        public IEnumerable<Listing> GetAllUserListings(int userID)
        {
            return _repository.GetAllUserListings(userID);
        }

        public async Task<IEnumerable<Listing>> GetAllUserListingsAsync(int userID)
        {
            return await _repository.GetAllUserListingsAsync(userID);
        }

        public Listing GetListing(int id)
        {
            return _repository.GetListing(id);
        }

        public async Task<Listing> GetListingAsync(int id)
        {
            return await _repository.GetListingAsync(id);
        }

        public void RemoveListing(int id)
        {
            _repository.RemoveListing(id);
        }

        public IEnumerable<Listing> SearchListings(decimal minPrice, decimal maxPrice, double minMetric, double maxMetric, bool forRent)
        {
            return _repository.SearchListings(minPrice, maxPrice, minMetric, maxMetric, forRent);
        }

        public async Task<IEnumerable<Listing>> SearchListingsAsync(decimal minPrice, decimal maxPrice, double minMetric, double maxMetric, bool forRent)
        {
            return await _repository.SearchListingsAsync(minPrice, maxPrice, minMetric, maxMetric, forRent);
        }
    }
}
