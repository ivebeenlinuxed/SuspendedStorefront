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
        ctx.Entry(customer).State = EntityState.Added;
        await ctx.SaveChangesAsync();
        return customer;
    }

    public async Task<IEnumerable<Customer>> GetActiveAsync()
    {
        return await ctx.Customers.Where(c => c.IsActive).ToListAsync();
    }

    public async Task<Customer> GetByIDAsync(Guid id)
    {
        return await ctx.Customers.FirstOrDefaultAsync(c => c.ID == id);
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