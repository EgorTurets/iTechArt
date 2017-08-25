using RealEstateAgency.BusinessLayer;
using RealEstateAgency.DBLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RealEstateAgency.UI.Controllers
{
    public class AccountController : ApiController
    {
        private StockService _service = new StockService(new StockRepository());


    }
}
