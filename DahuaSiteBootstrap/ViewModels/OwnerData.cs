using DahuaSiteBootstrap.Controllers;
using DahuaSiteBootstrap.Model;

namespace DahuaSiteBootstrap.ViewModels
{
    public class OwnerData
    {
        public ICollection<Dsfile> files { get; set; }

        public ICollection<Notification> Ntfs { get; set; }

        public void OrderByCategory(string category)
        {
            files = files.Where(f => f.Category == category).ToList();
        }

        public void Search(string searchString)
        {
            files = files
            .Where(item =>
                item.Name.Contains(searchString))
            .ToList();
        }
    }
}