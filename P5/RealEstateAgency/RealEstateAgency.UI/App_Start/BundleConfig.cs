using System.Web.Optimization;

namespace RealEstateAgency.UI
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Content/bundle").Include(
                        "~/Content/bundle.js"));

            bundles.Add(new StyleBundle("~/Content/style").Include(
                      "~/Content/style.css"));

            BundleTable.EnableOptimizations = false;
        }
    }
}