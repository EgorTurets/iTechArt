using RealEstateAgency.BusinessLayer;
using RealEstateAgency.DBLayer;
using RealEstateAgency.Models.Models;
using RealEstateAgency.UI.ViewModels;
//using System.Web.Helpers;
using System.Web.Http;

namespace RealEstateAgency.UI.Controllers
{
    public class TestController : ApiController
    {
        private ListingService _service = new ListingService(new ListingRepository());

        [HttpGet]
        public IHttpActionResult GetNotification(int id)
        {
            Listing notification = _service.GetListing(id);
            NotificationViewModel notificationResult = new NotificationViewModel
            {
                Id = notification.NoticeID,
                Title = notification.Title,
                Description = notification.Description,
                Address = notification.Address,
                Metric = notification.Metric,
                Price = notification.Price,
                ForRent = notification.ForRent,
                ProprietorID = notification.ProprietorID
            };

            return Json<NotificationViewModel>(notificationResult);
        }
    }
}
