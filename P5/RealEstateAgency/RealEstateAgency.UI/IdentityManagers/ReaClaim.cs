using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization;
using System.Security.Claims;
using System.Security.Principal;

namespace RealEstateAgency.UI.IdentityManagers
{
    public class ReaClaim : ClaimsIdentity
    {
        #region Constructors
        public ReaClaim()
        {
        }

        public ReaClaim(IIdentity identity) : base(identity)
        {
        }

        public ReaClaim(IEnumerable<Claim> claims) : base(claims)
        {
        }

        public ReaClaim(string authenticationType) : base(authenticationType)
        {
        }

        public ReaClaim(BinaryReader reader) : base(reader)
        {
        }

        public ReaClaim(IEnumerable<Claim> claims, string authenticationType) : base(claims, authenticationType)
        {
        }

        public ReaClaim(IIdentity identity, IEnumerable<Claim> claims) : base(identity, claims)
        {
        }

        public ReaClaim(string authenticationType, string nameType, string roleType) : base(authenticationType, nameType, roleType)
        {
        }

        public ReaClaim(IEnumerable<Claim> claims, string authenticationType, string nameType, string roleType) : base(claims, authenticationType, nameType, roleType)
        {
        }

        public ReaClaim(IIdentity identity, IEnumerable<Claim> claims, string authenticationType, string nameType, string roleType) : base(identity, claims, authenticationType, nameType, roleType)
        {
        }

        protected ReaClaim(ClaimsIdentity other) : base(other)
        {
        }

        protected ReaClaim(SerializationInfo info) : base(info)
        {
        }

        protected ReaClaim(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
        #endregion

        public override bool IsAuthenticated => true;
    }
}