using Ninject;
using Ninject.Modules;
using Ninject.Web.Common;
using RealEstateAgency.BusinessLayer;
using RealEstateAgency.BusinessLayer.Interfaces;
using RealEstateAgency.DBLayer;
using RealEstateAgency.DBLayer.Interfaces;
using RealEstateAgency.UI.Utils;

namespace RealEstateAgency.DI.App_Start
{
    public class ReaNinjectModule : NinjectModule
    {
        public override void Load()
        {
            this.Bind<IListingRepository>().To<ListingRepository>().InRequestScope();
            this.Bind<IUserRepository>().To<UserRepository>().InRequestScope();
            this.Bind<IListingService>().To<ListingService>().InRequestScope().WithConstructorArgument("repository", ctx => ctx.Kernel.Get<IListingRepository>());
            this.Bind<IUserService>().To<UserService>().InRequestScope().WithConstructorArgument("repository", ctx => ctx.Kernel.Get<IUserRepository>());
            this.Bind<ReaUserStore>().ToSelf().WithConstructorArgument("service", ctx => ctx.Kernel.Get<IUserService>());
        }
    }
}
