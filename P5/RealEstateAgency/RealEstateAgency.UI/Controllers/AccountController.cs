using RealEstateAgency.BusinessLayer;
using RealEstateAgency.DBLayer;
using System.Web.Http;

namespace RealEstateAgency.UI.Controllers
{
    public class AccountController : ApiController
    {
        private ListingService _service = new ListingService(new ListingRepository());


    }
}
