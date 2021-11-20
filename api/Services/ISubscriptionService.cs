using SuspendedStorefront.Models;

namespace SuspendedStorefront.Services
{
    public interface ISubscriptionService {

        Task<List<ProductSubscriptionReceipt>> ExecuteForDayAsync(DateTime executeDate);
        Task<IEnumerable<ProductSubscription>> GetActiveAsync();
        Task<ProductSubscription> AddSubscriptionAsync(ProductSubscription subscription);
        Task<ProductSubscription> GetByIDAsync(Guid id);
        Task<ProductSubscription> UpdateAsync(ProductSubscription ps);
    }
}