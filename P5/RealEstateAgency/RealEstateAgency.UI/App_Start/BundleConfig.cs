using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace RealEstateAgency.UI.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/bundles/bundle").Include(
                        "~/Views/Base/dist/bundle.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Views/Base/style.css"));
        }
    }
}