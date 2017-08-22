using RealEstateAgency.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RealEstateAgency.Models.Models;
using System.Transactions;

namespace RealEstateAgency.DBLayer
{
    public class StockRepository : IStockRepository
    {
        private EstateAgencyDbContext _notificationContext;

        public StockRepository()
        {
            _notificationContext = new EstateAgencyDbContext();
        }

        public Notification AddNotification(Notification notification)
        {
            _notificationContext.Set<Notification>().Add(notification);
            _notificationContext.SaveChanges();
            return notification;
        }

        public Task<Notification> AddNotificationAsync(Notification notification)
        {
            return Task.Factory.StartNew(() => AddNotification(notification));
        }

        public IEnumerable<Notification> GetAllUserNotifications(int userID)
        {
            return _notificationContext.Notifications.Where(n => n.ProprietorID == userID);
        }

        public Task<IEnumerable<Notification>> GetAllUserNotificationsAsync(int userID)
        {
            return Task.Factory.StartNew(() => GetAllUserNotifications(userID));
        }

        public Notification GetNotification(int id)
        {
            return _notificationContext.Notifications.FirstOrDefault(n => n.NoticeID == id);
        }

        public Task<Notification> GetNotificationAsync(int id)
        {
            return Task.Factory.StartNew(() => GetNotification(id));
        }

        public bool RemoveNotification(int id)
        {
            using (var tran = new TransactionScope(TransactionScopeOption.Required))
            {
                try
                {
                    Notification notice = GetNotification(id);
                    _notificationContext.Notifications.Remove(notice);
                    _notificationContext.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }

            }
        }

        public IEnumerable<Notification> SearchNotifications(decimal minPrice, decimal maxPrice, double minMetric, double maxMetric, bool forRent)
        {
            return _notificationContext.Notifications.Where(n => (n.Price >= minPrice) && (n.Price <= maxPrice) &&
                                                                (n.Metric >= minMetric) && (n.Metric <= maxMetric) && (n.ForRent == forRent));
        }

        public Task<IEnumerable<Notification>> SearchNotificationsAsync(decimal minPrice, decimal maxPrice, double minMetric, double maxMetric, bool forRent)
        {
            return Task.Factory.StartNew(() => SearchNotifications(minPrice, maxPrice, minMetric, maxMetric, forRent));
        }

        public void Dispose()
        {
            _notificationContext.Dispose();
        }
    }
}
