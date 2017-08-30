using Microsoft.AspNet.Identity.Owin;
using Ninject;
using RealEstateAgency.BusinessLayer.Interfaces;
using RealEstateAgency.DI.App_Start;
using RealEstateAgency.Models.Models;
using RealEstateAgency.UI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RealEstateAgency.UI.Controllers
{
    [RoutePrefix("API/Listing")]
    [Authorize]
    public class ListingController : ApiController
    {
        private IListingService _service;

        public ListingController(IListingService service) : base()
        {
            _service = service;
        }

        public ListingController() : this(new StandardKernel(new ReaNinjectModule()).Get<IListingService>())
        {
        }

        [HttpPost]
        [Route("SearchListing")]
        [AllowAnonymous]
        public IHttpActionResult SearchListing(SearchListingViewModel searchParams)
        {
            if (!this.ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            IEnumerable<Listing> listings = _service.SearchListings(searchParams.MinPrice, searchParams.MaxPrice, searchParams.MinMetric, searchParams.MaxMetric, searchParams.ForRent);
            IList<ListingViewModel> listingsResult = new List<ListingViewModel>(listings.Count());
            foreach (var item in listings)
            {
                listingsResult.Add(new ListingViewModel {
                    Id = item.ListingID,
                    Title = item.Title,
                    Description = item.Description,
                    Address = item.Address,
                    Metric = item.Metric,
                    Price = item.Price,
                    ForRent = item.ForRent
                });
            }

            return Json<IEnumerable<ListingViewModel>>(listingsResult);
        }


        [HttpGet]
        [Route("GetListing/{id:int}")]
        [AllowAnonymous]
        public IHttpActionResult GetListing(int id)
        {
            
            Listing listing = _service.GetListing(id);
            ListingViewModel listingResult = new ListingViewModel
            {
                Id = listing.ListingID,
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
            if (!this.ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            var cookie = Request.Headers.GetCookies("AspNet.AuthenticationCookie").FirstOrDefault();
            if (cookie != null)
            {
                var userId = Int32.Parse(cookie["id"].Value);



            }
            else
            {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }

            _service.AddListing(new Listing
            {
                Title = newListing.Title,
                Description = newListing.Description,
                Address = newListing.Address,
                Metric = newListing.Metric,
                Price = newListing.Price,
                ForRent = newListing.ForRent,
                ProprietorID = 0                //need to read userID from cookie
            });




        }


        [HttpDelete]
        [Route("DeleteListing")]
        public void DeleteListing(int id)
        {
            int userId;
            var cookie = Request.Headers.GetCookies("AspNet.AuthenticationCookie").FirstOrDefault();
            if (cookie != null)
            {
                userId = Int32.Parse(cookie["id"].Value);



            }
            else
            {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }

            var listing = _service.GetListing(id);
            if (listing == null)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
            if (listing.ProprietorID != userId)
            {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }
            _service.RemoveListing(id);
        }
    }
}
