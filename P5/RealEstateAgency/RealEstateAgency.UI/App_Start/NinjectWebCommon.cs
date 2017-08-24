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

        public static IKernel StandartKernel
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

            DependencyResolver.SetResolver(new NinjectDependencyResolver(kernel));
        }

        /*  !!!!!!!!!!!!!!! whatever is next - a comment (auto added code) !!!!!!!!!!!!!!!!


                private static readonly Bootstrapper bootstrapper = new Bootstrapper();

                /// <summary>
                /// Starts the application
                /// </summary>
                public static void Start() 
                {
                    DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
                    DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
                    bootstrapper.Initialize(CreateKernel);
                }

                /// <summary>
                /// Stops the application.
                /// </summary>
                public static void Stop()
                {
                    bootstrapper.ShutDown();
                }


                /// <summary>
                /// Creates the kernel that will manage your application.
                /// </summary>
                /// <returns>The created kernel.</returns>
                private static IKernel CreateKernel()
                {
                    var kernel = new StandardKernel();

                    try
                    {
                        kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
                        kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();

                        RegisterServices(kernel);
                        return kernel;
                    }
                    catch
                    {
                        kernel.Dispose();
                        throw;
                    }
                }
                */


    }
}
