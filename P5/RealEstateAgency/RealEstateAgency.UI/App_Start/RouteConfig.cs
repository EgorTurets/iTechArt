using System.Web.Mvc;
using System.Web.Routing;

namespace RealEstateAgency.UI
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "NotAPI",
                url: "{pageName}/{param1}",
                defaults: new {controller = "Base", action = "Index", param1 = UrlParameter.Optional },
                constraints: new { pageName = "^register$|^user$|^login$|^ChangePass$" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Base", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
