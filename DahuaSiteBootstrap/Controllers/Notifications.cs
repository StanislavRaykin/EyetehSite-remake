using DahuaSiteBootstrap.Model; 
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Text.Encodings.Web;

namespace DahuaSiteBootstrap.Controllers
{
    public static class Notifications
    {
        private static DahuaSiteCopyContext _db = new DahuaSiteCopyContext();

        public static async Task<ICollection<Notification>> GetAll()
        {
            return await _db.Notifications.ToListAsync();
        }

        public static async Task<Notification> GetOne(int id)
        {
            return await _db.Notifications.FindAsync(id) ?? null;
        }

        public static async Task DeleteOne(int id)
        {
            var notif = await GetOne(id);
            _db.Notifications.Remove(notif);
            await _db.SaveChangesAsync();
        }

        public static async Task DeleteAll()
        {
            await _db.Notifications.ExecuteDeleteAsync();
        }

        public static async Task Create(Notification notif)
        {
            await _db.Notifications.AddAsync(notif);
            await _db.SaveChangesAsync();
        }
    }
}
