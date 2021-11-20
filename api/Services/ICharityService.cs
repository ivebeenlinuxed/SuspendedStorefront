using System.Threading.Tasks;
using SuspendedStorefront.Controllers;
using SuspendedStorefront.Models;

namespace SuspendedStorefront.Services
{
    public interface ICharityService {
        Task<Charity> RegisterCharityAsync(Charity charity);
        Task<CharityProduct> RequestDonationAsync(CharityProduct charityProduct);

        Task<Charity> GetByIDAsync(Guid ID);

        Task<Charity> UpdateAsync(Charity c);

        Task<Charity> SetInactiveByIDAsync(Guid ID);
        Task<IEnumerable<Charity>> GetActiveAsync();
    }
}