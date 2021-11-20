using SuspendedStorefront.Models;

namespace SuspendedStorefront.Services
{
    public interface ICustomerService {
        Task<IEnumerable<Customer>> GetActiveAsync();
        Task<Customer> AddCustomerAsync(Customer customer);
        Task<Customer> GetByIDAsync(Guid id);
        Task<Customer> UpdateAsync(Customer c);
        Task<Product> GetProductAsCustomer(Guid productID, Guid customerID);
    }
}