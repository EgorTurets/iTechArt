using RealEstateAgency.BusinessLayer;
using RealEstateAgency.DBLayer;
using RealEstateAgency.UI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
//using System.Web.Helpers;
using System.Web.Http;

using Newtonsoft.Json;
using RealEstateAgency.Models.Models;

namespace RealEstateAgency.UI.Controllers
{
    public class TestController : ApiController
    {
        private StockService _service = new StockService(new StockRepository());

        [HttpGet]
        public IHttpActionResult GetNotification(int id)
        {
            Notification notification = _service.GetNotification(id);
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
