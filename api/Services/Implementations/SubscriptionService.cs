using Microsoft.EntityFrameworkCore;
using SuspendedStorefront.Models;

namespace SuspendedStorefront.Services.Implementations;

class SubscriptionService : ISubscriptionService
{
    StoreDbContext ctx;

    public SubscriptionService(StoreDbContext ctx)
    {
        this.ctx = ctx;
    }

    public async Task<ProductSubscription> AddSubscriptionAsync(ProductSubscription subscription)
    {
        subscription.ID = Guid.NewGuid();
        subscription.IsActive = true;
        this.ctx.Entry(subscription).State = Microsoft.EntityFrameworkCore.EntityState.Added;
        await this.ctx.SaveChangesAsync();
        return subscription;
    }

    public Task<List<ProductSubscriptionReceipt>> ExecuteForDayAsync(DateTime executeDate)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<ProductSubscription>> GetActiveByCustomerAsync(Guid customerID) {
        return await this.ctx.ProductSubscriptions.Include(ps => ps.Product).Where(c => c.IsActive && c.CustomerID == customerID).ToListAsync();
    }

    public async Task<IEnumerable<ProductSubscription>> GetActiveAsync()
    {
        return await this.ctx.ProductSubscriptions.Where(c => c.IsActive).ToListAsync();
    }

    public async Task<ProductSubscription> GetByIDAsync(Guid id)
    {
        return await this.ctx.ProductSubscriptions.FirstOrDefaultAsync(c => c.ID == id);
    }

    public async Task MarkInactiveAsync(Guid subscriptionID)
    {
        ProductSubscription original = await this.GetByIDAsync(subscriptionID);
        if (!original.IsActive) {
            throw new ArgumentException("This item is not active and cannot be deactivated");
        }
        original.IsActive = false;
        this.ctx.Entry(original).State = EntityState.Modified;
        await this.ctx.SaveChangesAsync();


    }

    public async Task<ProductSubscription> UpdateAsync(ProductSubscription ps)
    {
        if (ps.MaxSuspendedQuantity+ps.MondayQuantity+ps.TuesdayQuantity+ps.WednesdayQuantity+ps.ThursdayQuantity+ps.FridayQuantity+ps.SaturdayQuantity+ps.SundayQuantity == 0) {
            throw new ArgumentException("Cannot update to no deliveries. Delete the subscription instead.");
        }
        ProductSubscription original = await this.GetByIDAsync(ps.ID);
        if (!ps.IsActive && original.IsActive) {
            //If the customer is cancelling their product
            original.IsActive = false;
        } else if (ps.IsActive && ps.ProductID == original.ProductID) {
            //If the customer is updating quantities of an active line
            ps.ID = Guid.NewGuid();
            original.PreviousSubscriptionID = ps.ID;
            original.IsActive = false;
            this.ctx.Entry(ps).State = EntityState.Added;
        } else {
            throw new ArgumentException("Updates must be performed on active lines, and cannot change the product");
        }
        this.ctx.Entry(original).State = EntityState.Modified;

        await this.ctx.SaveChangesAsync();
        return original;
    }
}