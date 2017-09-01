using System.Web.Optimization;

namespace RealEstateAgency.UI.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Content/bundle").Include(
                        "~/Content/bundle.js"));

            bundles.Add(new StyleBundle("~/Content/style").Include(
                      "~/Views/Base/style.css"));

            BundleTable.EnableOptimizations = false;
        }
    }
}