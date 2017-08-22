using RealEstateAgency.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealEstateAgency.Models
{
    public interface IStockRepository : IDisposable
    {
        //Notification actions

        Notification GetNotification(int id);
        Task<Notification> GetNotificationAsync(int id);

        IEnumerable<Notification> SearchNotifications(decimal minPrice, decimal maxPrice, double minMetric, double maxMetric, bool forRent);
        Task<IEnumerable<Notification>> SearchNotificationsAsync(decimal minPrice, decimal maxPrice, double minMetric, double maxMetric, bool forRent);

        IEnumerable<Notification> GetAllUserNotifications(int userID);
        Task<IEnumerable<Notification>> GetAllUserNotificationsAsync(int userID);

        Notification AddNotification(Notification notification);
        Task<Notification> AddNotificationAsync(Notification notification);

        bool RemoveNotification(int id);
    }
}
