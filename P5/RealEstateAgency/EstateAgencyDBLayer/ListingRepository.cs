using RealEstateAgency.DBLayer.Interfaces;
using RealEstateAgency.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealEstateAgency.DBLayer
{
    public class ListingRepository : IListingRepository
    {
        private EstateAgencyDbContext _context;

        public ListingRepository()
        {
            _context = new EstateAgencyDbContext();
        }

        public Listing AddListing(Listing listing)
        {
            _context.Set<Listing>().Add(listing);
            _context.SaveChanges();
            return listing;
        }

        public Task<Listing> AddListingAsync(Listing listing)
        {
            return Task.Factory.StartNew(() => AddListing(listing));
        }

        public IEnumerable<Listing> GetAllUserListings(int userID)
        {
            return _context.Listings.Where(n => n.ProprietorID == userID);
        }

        public Task<IEnumerable<Listing>> GetAllUserListingsAsync(int userID)
        {
            return Task.Factory.StartNew(() => GetAllUserListings(userID));
        }

        public Listing GetListing(int id)
        {
            return _context.Listings.FirstOrDefault(n => n.ListingID == id);
        }

        public Task<Listing> GetListingAsync(int id)
        {
            return Task.Factory.StartNew(() => GetListing(id));
        }

        public void RemoveListing(int id)
        {
            Listing listing = GetListing(id);
            if (listing == null)
            {
                throw new ApplicationException("Listing not found");
            }
            _context.Listings.Remove(listing);
            _context.SaveChanges();
        }

        public IEnumerable<Listing> SearchListings(decimal minPrice, decimal maxPrice, double minMetric, double maxMetric, bool forRent)
        {
            return _context.Listings.Where(n => (n.Price >= minPrice) && (n.Price <= maxPrice) &&
                                                (n.Metric >= minMetric) && (n.Metric <= maxMetric) && (n.ForRent == forRent));
        }

        public Task<IEnumerable<Listing>> SearchListingsAsync(decimal minPrice, decimal maxPrice, double minMetric, double maxMetric, bool forRent)
        {
            return Task.Factory.StartNew(() => SearchListings(minPrice, maxPrice, minMetric, maxMetric, forRent));
        }


        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
