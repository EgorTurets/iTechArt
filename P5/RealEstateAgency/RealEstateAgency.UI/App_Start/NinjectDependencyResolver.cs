using Ninject;
using Ninject.Parameters;
using Ninject.Syntax;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Dependencies;

namespace RealEstateAgency.UI.App_Start
{
    public class NinjectDependencyResolver : NinjectDependencyScope, IDependencyResolver
    {
        private readonly IKernel _kernel;

        public NinjectDependencyResolver(IKernel kernel) : base(kernel)
        {
            _kernel = kernel;
        }

        public IDependencyScope BeginScope()
        {
            return this;
        }

        public override void Dispose()
        {
            _kernel.Dispose();
        }
    }

    public class NinjectDependencyScope : IDependencyScope
    {
        private IResolutionRoot _resolver;

        public NinjectDependencyScope(IResolutionRoot resolver)
        {
            _resolver = resolver;
        }

        public virtual void Dispose()
        {
            _resolver = null;
        }

        public object GetService(Type serviceType)
        {
            return _resolver.TryGet(serviceType, new IParameter[0]);
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            return _resolver.GetAll(serviceType, new IParameter[0]);
        }
    }
}