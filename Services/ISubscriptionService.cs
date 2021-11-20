using SuspendedStorefront.Models;

namespace SuspendedStorefront.Services
{
    public interface ISubscriptionService {

        ProductSubscription AddSubscription(ProductSubscription product);

        List<ProductSubscriptionReceipt> ExecuteForDay(DateTime executeDate);
    }
}