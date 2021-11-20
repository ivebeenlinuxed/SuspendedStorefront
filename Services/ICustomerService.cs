using SuspendedStorefront.Models;

namespace SuspendedStorefront.Services
{
    interface ICustomerService {
        Task<IEnumerable<Customer>> GetActiveAsync();
        Task<Customer> AddCustomerAsync(Customer customer);
        Task<Customer> GetByIDAsync(Guid id);
        Task<Product> UpdateAsync(Customer c);
    }
}