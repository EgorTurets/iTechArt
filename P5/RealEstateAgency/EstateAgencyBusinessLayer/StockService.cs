using RealEstateAgency.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RealEstateAgency.Models.Models;
using RealEstateAgency.DBLayer;

namespace RealEstateAgency.BusinessLayer
{
    public class StockService : IStockService
    {
        private IStockRepository _repository;

        public StockService(IStockRepository repository)
        {
            _repository = repository;
        }

        public Notification AddNotification(Notification notification)
        {
            return _repository.AddNotification(notification);
        }

        public async Task<Notification> AddNotificationAsync(Notification notification)
        {
            return await _repository.AddNotificationAsync(notification);
        }

        public IEnumerable<Notification> GetAllUserNotifications(int userID)
        {
            return _repository.GetAllUserNotifications(userID);
        }

        public async Task<IEnumerable<Notification>> GetAllUserNotificationsAsync(int userID)
        {
            return await _repository.GetAllUserNotificationsAsync(userID);
        }

        public Notification GetNotification(int id)
        {
            return _repository.GetNotification(id);
        }

        public async Task<Notification> GetNotificationAsync(int id)
        {
            return await _repository.GetNotificationAsync(id);
        }

        public bool RemoveNotification(int id)
        {
            return _repository.RemoveNotification(id);
        }

        public IEnumerable<Notification> SearchNotifications(decimal minPrice, decimal maxPrice, double minMetric, double maxMetric, bool forRent)
        {
            return _repository.SearchNotifications(minPrice, maxPrice, minMetric, maxMetric, forRent);
        }

        public async Task<IEnumerable<Notification>> SearchNotificationsAsync(decimal minPrice, decimal maxPrice, double minMetric, double maxMetric, bool forRent)
        {
            return await _repository.SearchNotificationsAsync(minPrice, maxPrice, minMetric, maxMetric, forRent);
        }
    }
}
