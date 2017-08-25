[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(RealEstateAgency.UI.App_Start.NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(RealEstateAgency.UI.App_Start.NinjectWebCommon), "Stop")]

namespace RealEstateAgency.UI.App_Start
{
    using System;
    using System.Web;

    using Microsoft.Web.Infrastructure.DynamicModuleHelper;

    using Ninject;
    using Ninject.Web.Common;
    using RealEstateAgency.Models;
    using RealEstateAgency.DBLayer;
    using RealEstateAgency.BusinessLayer;
    using System.Web.Http;
    using System.Web.Mvc;
    using RealEstateAgency.Models.Models;
    using RealEstateAgency.UI.Utils;
    using System.Reflection;

    public static class NinjectWebCommon 
    {
        //=== My code ===
        private static IKernel kernel;

        public static IKernel Kernel
        { get { return kernel; } }

        //=== End my code ===

        public static IKernel CreateKernel()
        {
            kernel = new StandardKernel();

            try
            {
                kernel.Load(Assembly.GetExecutingAssembly());

                RegisterServices(kernel);
                return kernel;
            }
            catch
            {
                kernel.Dispose();
                throw;
            }
        }

        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterServices(IKernel kernel)
        {
            kernel.Bind<IStockRepository>().To<StockRepository>().InRequestScope();
            kernel.Bind<IStockService>().To<StockService>().InRequestScope();
            kernel.Bind<ICustomUserStore>().To<CustomUserStore>().InRequestScope();
            kernel.Bind<CustomUserManager>().ToSelf();
            kernel.Bind<CustomSignInManager>().ToSelf();

            kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();

            DependencyResolver.SetResolver(new NinjectDependencyResolver(kernel));
        }
    }
}
