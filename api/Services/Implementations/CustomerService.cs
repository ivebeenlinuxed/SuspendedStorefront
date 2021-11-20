using Microsoft.EntityFrameworkCore;
using SuspendedStorefront.Models;
using SuspendedStorefront.Services;

namespace SuspendedStorefront.Services.Implementations;

class CustomerService : ICustomerService
{
    private readonly StoreDbContext ctx;

    public CustomerService(StoreDbContext ctx)
    {
        this.ctx = ctx;
    }

    public async Task<Customer> AddCustomerAsync(Customer customer)
    {
        customer.ID = Guid.NewGuid();
        customer.IsActive = true;
        ctx.Entry(customer).State = EntityState.Added;
        await ctx.SaveChangesAsync();
        return customer;
    }

    public async Task<IEnumerable<Customer>> GetActiveAsync()
    {
        return await ctx.Customers.Where(c => c.IsActive).ToListAsync();
    }

    public async Task<Customer> GetByLoginIDAsync(string loginID) {
        Customer c = await ctx.Customers.FirstOrDefaultAsync(c => c.AuthID == loginID);
        return c;
    }

    public async Task<Customer> GetByIDAsync(Guid id)
    {
        return await ctx.Customers.Include(c => c.ProductSubscriptions).FirstOrDefaultAsync(c => c.ID == id);
    }

    public async Task<Product> GetProductAsCustomer(Guid productID, Guid customerID) {
        Product p = await ctx.Products.FirstOrDefaultAsync(p => p.ID == productID);
        p.Subscriptions = await ctx.ProductSubscriptions.Where(ps => ps.ProductID == productID && ps.CustomerID == customerID).ToListAsync();
        return p;
    }

    public async Task<Customer> UpdateAsync(Customer c)
    {
        Customer original = await GetByIDAsync(c.ID);
        original.Name = c.Name;
        original.Address1 = c.Address1;
        original.Address2 = c.Address2;
        original.City = c.City;
        original.County = c.County;
        original.PostalCode = c.PostalCode;
        ctx.Entry(original).State = EntityState.Modified;
        await ctx.SaveChangesAsync();
        return original;
    }
}