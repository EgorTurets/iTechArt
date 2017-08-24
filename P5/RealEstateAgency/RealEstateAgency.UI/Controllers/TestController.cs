using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace RealEstateAgency.UI.Controllers
{
    public class TestController : ApiController
    {
        public IEnumerable<int> GetTemp()
        {
            //HttpContext.Current.kernel;

            return null;
        }
    }
}
