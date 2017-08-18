using EstateAgencyModels.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EstateAgencyModels
{
    public interface IStockRepository : IDisposable
    {
        //Notification actions

        Notification GetNotification(int id);
        Task<Notification> GetNotificationAsync(int id);

        IEnumerable<Notification> SearchNotifications();
        Task<IEnumerable<Notification>> SearchNotificationsAsync();

        Notification AddNotification(Notification notification);
        Task<Notification> AddNotificationAsync(Notification notification);

        Notification UpdateNotification(Notification notification);

        bool RemoveNotification(int id);
    }
}
