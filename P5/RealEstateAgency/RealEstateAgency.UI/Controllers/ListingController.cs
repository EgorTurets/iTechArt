using Microsoft.AspNet.Identity.Owin;
using Ninject;
using RealEstateAgency.BusinessLayer.Interfaces;
using RealEstateAgency.DI.App_Start;
using RealEstateAgency.Models.Models;
using RealEstateAgency.UI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace RealEstateAgency.UI.Controllers
{
    [RoutePrefix("API/Listing")]
    public class ListingController : ApiController
    {
        private IListingService _service;

        public ListingController() : base()
        {
            _service = new StandardKernel(new ReaNinjectModule()).Get<IListingService>();
        }

        [HttpGet]
        [Route("GetListing/{id:int}")]
        public IHttpActionResult GetListing(int id)
        {
            IKernel kernnel = Request.GetOwinContext().Get<IKernel>();

            Listing listing = _service.GetListing(id);
            ListingViewModel listingResult = new ListingViewModel
            {
                Id = listing.NoticeID,
                Title = listing.Title,
                Description = listing.Description,
                Address = listing.Address,
                Metric = listing.Metric,
                Price = listing.Price,
                ForRent = listing.ForRent,
            };

            return Json<ListingViewModel>(listingResult);
        }

        [HttpGet]
        [Route("GetUserListings")]
        public IHttpActionResult GetUserListings()
        {
            var cookie = Request.Headers.GetCookies("AspNet.AuthenticationCookie").FirstOrDefault();

            if(cookie != null)
            {
                IEnumerable <Listing> userListings = _service.GetAllUserListings(Int32.Parse(cookie["id"].Value));


                
            }

            

            IEnumerable<ListingViewModel> listingsResult = null;

            return Json<IEnumerable<ListingViewModel>>(listingsResult);
        }

        [HttpPost]
        [Route("AddListing")]
        public void AddNewListing(ListingViewModel newListing)
        {

        }
    }
}
