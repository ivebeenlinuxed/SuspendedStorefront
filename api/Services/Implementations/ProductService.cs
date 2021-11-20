using Microsoft.EntityFrameworkCore;
using SuspendedStorefront.Models;

namespace SuspendedStorefront.Services.Implementations;

class ProductService : IProductService
{
    private readonly StoreDbContext ctx;

    public ProductService(StoreDbContext ctx)
    {
        this.ctx = ctx;
    }

    public async Task<Product> AddProductAsync(Product product)
    {
        product.ID = Guid.NewGuid();
        this.ctx.Entry(product).State = Microsoft.EntityFrameworkCore.EntityState.Added;
        await this.ctx.SaveChangesAsync();
        return product;
    }

    public async Task<IEnumerable<Product>> GetActiveAsync()
    {
        return await this.ctx.Products.Where(c => c.IsActive).ToListAsync();
    }

    public async Task<Product> GetByIDAsync(Guid id)
    {
        return await this.ctx.Products.FirstOrDefaultAsync(c => c.ID == id);
    }

    public async Task<Product> UpdateAsync(Product p)
    {
        Product original = await this.GetByIDAsync(p.ID);
        original.Name = p.Name;
        original.Price = p.Price;
        this.ctx.Entry(original).State = EntityState.Modified;
        await this.ctx.SaveChangesAsync();
        return original;
    }
}