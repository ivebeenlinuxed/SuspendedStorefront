using SuspendedStorefront.Models;

namespace SuspendedStorefront.Services
{
    public interface ISubscriptionService {

        ProductSubscription AddSubscription(ProductSubscription product);

        List<ProductSubscriptionReceipt> ExecuteForDay(DateTime executeDate);
        Task<IEnumerable<ProductSubscription>> GetActiveAsync();
        Task<Product> AddSubscriptionAsync(ProductSubscription subscription);
        Task<ProductSubscription> GetByIDAsync(Guid id);
        Task<ProductSubscription> UpdateAsync(ProductSubscription ps);
    }
}