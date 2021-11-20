using Microsoft.EntityFrameworkCore;
using SuspendedStorefront.Models;
using SuspendedStorefront.Services;

class CustomerService : ICustomerService {
    private readonly StoreDbContext ctx;

    public CustomerService(StoreDbContext ctx) {
        this.ctx = ctx;
    }

    public async Task<Customer> AddCustomerAsync(Customer customer)
    {
        customer.ID = Guid.NewGuid();
        this.ctx.Entry(customer).State = Microsoft.EntityFrameworkCore.EntityState.Added;
        await this.ctx.SaveChangesAsync();
        return customer;
    }

    public async Task<IEnumerable<Customer>> GetActiveAsync()
    {
        return await this.ctx.Customers.Where(c => c.IsActive).ToListAsync();
    }

    public async Task<Customer> GetByIDAsync(Guid id)
    {
        return await this.ctx.Customers.FirstOrDefaultAsync(c => c.ID == id);
    }

    public async Task<Customer> UpdateAsync(Customer c)
    {
        Customer original = await this.GetByIDAsync(c.ID);
        original.Name = c.Name;
        original.Address1 = c.Address1;
        original.Address2 = c.Address2;
        original.City = c.City;
        original.County = c.County;
        original.PostalCode = c.PostalCode;
        this.ctx.Entry(original).State = EntityState.Modified;
        await this.ctx.SaveChangesAsync();
        return original;
    }
}