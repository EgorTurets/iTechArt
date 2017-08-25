using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RealEstateAgency.UI.ViewModels
{
    public class NotificationViewModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Address { get; set; }

        public decimal Price { get; set; }

        public double Metric { get; set; }

        public bool ForRent { get; set; }

        public int ProprietorID { get; set; }
    }
}