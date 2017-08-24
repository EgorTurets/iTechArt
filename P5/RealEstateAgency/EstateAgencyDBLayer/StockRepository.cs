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
        private EstateAgencyDbContext _context;

        public StockRepository()
        {
            _context = new EstateAgencyDbContext();
        }

        //========= NOTIFICATION ACTIONS =========

        public Notification AddNotification(Notification notification)
        {
            _context.Set<Notification>().Add(notification);
            _context.SaveChanges();
            return notification;
        }

        public Task<Notification> AddNotificationAsync(Notification notification)
        {
            return Task.Factory.StartNew(() => AddNotification(notification));
        }

        public IEnumerable<Notification> GetAllUserNotifications(int userID)
        {
            return _context.Notifications.Where(n => n.ProprietorID == userID);
        }

        public Task<IEnumerable<Notification>> GetAllUserNotificationsAsync(int userID)
        {
            return Task.Factory.StartNew(() => GetAllUserNotifications(userID));
        }

        public Notification GetNotification(int id)
        {
            return _context.Notifications.FirstOrDefault(n => n.NoticeID == id);
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
                    _context.Notifications.Remove(notice);
                    _context.SaveChanges();
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
            return _context.Notifications.Where(n => (n.Price >= minPrice) && (n.Price <= maxPrice) &&
                                                                (n.Metric >= minMetric) && (n.Metric <= maxMetric) && (n.ForRent == forRent));
        }

        public Task<IEnumerable<Notification>> SearchNotificationsAsync(decimal minPrice, decimal maxPrice, double minMetric, double maxMetric, bool forRent)
        {
            return Task.Factory.StartNew(() => SearchNotifications(minPrice, maxPrice, minMetric, maxMetric, forRent));
        }


        //========= USER ACTIONS =========

        public IEnumerable<AppUser> GetUsers()
        {
            return _context.Users.AsEnumerable();
        }

        public AppUser GetUserById(int userId)
        {

            return _context.Users.FirstOrDefault(u => u.Id == userId);
        }

        public AppUser GetUserByName(string userName)
        {

            return _context.Users.FirstOrDefault(u => u.UserName.Equals(userName, StringComparison.OrdinalIgnoreCase));
        }

        public AppUser AddUser(AppUser user)
        {
            if (_context.Users.FirstOrDefault(u => u.UserName.Equals(user.UserName, StringComparison.OrdinalIgnoreCase)) != null)
            {

                throw new ApplicationException("A user with this Email already exists");
            }
            _context.Set<AppUser>().Add(user);
            _context.SaveChangesAsync();

            return user;
        }

        public AppUser UpdateUser (AppUser user)
        {
            using (var tran = new TransactionScope(TransactionScopeOption.Required))
            {
                AppUser userNote = _context.Users.FirstOrDefault(u => u.Id == user.Id);
                if (userNote == null)
                {

                    throw new ApplicationException("User not found");
                }
                userNote.FirstName = user.FirstName;
                userNote.LastName = user.LastName;
                userNote.Notifications = user.Notifications;
                userNote.PasswordHash = user.PasswordHash;
                userNote.UserName = user.UserName;
                _context.Entry(userNote).State = System.Data.Entity.EntityState.Modified;

                return GetUserById(userNote.Id);
            }
        }

        public bool DeleteUser(AppUser user)
        {
            using (var tran = new TransactionScope(TransactionScopeOption.Required))
            {
                try
                {
                    AppUser userNote = _context.Users.FirstOrDefault(u => u.Id == user.Id);
                    if (userNote == null)
                    {
                        throw new ApplicationException("User not found");
                    }
                    _context.Users.Remove(userNote);
                    _context.SaveChangesAsync();
                }
                catch (Exception)
                {

                    return false;
                }
                
                return true;
            }
        }


        public void Dispose()
        {
            _context.Dispose();
        }

        
    }
}
