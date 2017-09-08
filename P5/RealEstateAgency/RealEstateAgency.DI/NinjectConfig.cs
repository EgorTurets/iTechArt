using Ninject;
using Ninject.Web.Common;
using RealEstateAgency.BusinessLayer;
using RealEstateAgency.BusinessLayer.Interfaces;
using RealEstateAgency.DBLayer;
using RealEstateAgency.DBLayer.Interfaces;
using RealEstateAgency.UI.Utils;
using System;
using System.Web;

namespace RealEstateAgency.DI
{
    public class NinjectConfig
    {
        public static IKernel Kernel { get; set; }

        /// <summary>
        /// Creates the kernel that will manage your application.
        /// </summary>
        /// <returns>The created kernel.</returns>
        public static IKernel CreateKernel()
        {
            Kernel = new StandardKernel();
            try
            {
                Kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
                Kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();

                RegisterServices(Kernel);

                return Kernel;
            }
            catch
            {
                Kernel.Dispose();
                throw;
            }
        }

        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterServices(IKernel kernel)
        {
            kernel.Bind<IListingRepository>().To<ListingRepository>().InRequestScope();
            kernel.Bind<IUserRepository>().To<UserRepository>().InRequestScope();
            kernel.Bind<IListingService>().To<ListingService>().InRequestScope().WithConstructorArgument("repository", ctx => ctx.Kernel.Get<IListingRepository>());
            kernel.Bind<IUserService>().To<UserService>().InRequestScope().WithConstructorArgument("repository", ctx => ctx.Kernel.Get<IUserRepository>());
            kernel.Bind<ReaUserStore>().ToSelf().WithConstructorArgument("service", ctx => ctx.Kernel.Get<IUserService>());
        }
    }
}
