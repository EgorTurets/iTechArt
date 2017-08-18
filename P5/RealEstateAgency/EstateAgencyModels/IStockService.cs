using EstateAgencyModels.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EstateAgencyModels
{
    public interface IStockService
    {
        //Notification actions

        Notification GetNotification(int id);

        IEnumerable<Notification> SearchNotifications();

        Notification AddNotification(Notification notification);

        bool RemoveNotification(int id);
    }
}
