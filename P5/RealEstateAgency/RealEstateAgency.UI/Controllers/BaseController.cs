using System.Web.Mvc;

namespace RealEstateAgency.UI.Controllers
{
    public class BaseController : Controller
    {
        // GET: Base
        public ActionResult Index()
        {
            return View();
        }
    }
}