using SuspendedStorefront.Models;

namespace SuspendedStorefront.Services
{
    public interface IProductService {
        Task<IEnumerable<Product>> GetActiveAsync();
        Task<Product> AddProductAsync(Product product);
        Task<Product> GetByIDAsync(Guid id);
        Task<Product> UpdateAsync(Product p);
    }
}