using Microsoft.EntityFrameworkCore;
using SuspendedStorefront.Models;

namespace SuspendedStorefront.Services.Implementations;

class CharityService : ICharityService
{
    private readonly StoreDbContext ctx;

    public CharityService(StoreDbContext ctx)
    {
        this.ctx = ctx;
    }
    public async Task<IEnumerable<Charity>> GetActiveAsync()
    {
        return await ctx.Charities.Where(c => c.IsActive).ToListAsync();
    }

    public async Task<IEnumerable<Charity>> GetActiveByCustomerIDAsync(Guid customerID)
    {
        return await ctx.Charities.Include(c => c.CharityProducts.Where(cp => cp.IsActive)).ThenInclude(cp => cp.Product).Where(c => c.IsActive && c.AdministratorID == customerID).ToListAsync();
    }

    public async Task<Charity> GetByIDAsync(Guid ID)
    {
        return await ctx.Charities.FirstOrDefaultAsync(c => c.ID == ID);
    }

    public async Task<Charity> RegisterCharityAsync(Charity charity)
    {
        charity.ID = Guid.NewGuid();
        charity.IsActive = true;
        if (charity.AdministratorID == null) {
            throw new Exception("A charity must be administrated by a customer");
        }
        charity.Status = 0;
        ctx.Entry(charity).State = EntityState.Added;
        await ctx.SaveChangesAsync();
        return charity;
    }

    public async Task<CharityProduct> RequestDonationAsync(CharityProduct charityProduct)
    {
        charityProduct.IsActive = true;
        ctx.Entry(charityProduct).State = EntityState.Added;
        await ctx.SaveChangesAsync();
        return charityProduct;

    }

    public async Task<Charity> SetInactiveByIDAsync(Guid ID)
    {
        Charity c = await GetByIDAsync(ID);
        c.IsActive = false;
        ctx.Entry(c).State = EntityState.Modified;
        await ctx.SaveChangesAsync();
        return c;

    }

    public async Task<Charity> SetApprovedByIDAsync(Guid ID)
    {
        Charity c = await GetByIDAsync(ID);
        c.Status = 1;
        ctx.Entry(c).State = EntityState.Modified;
        await ctx.SaveChangesAsync();
        return c;

    }

    public async Task<Charity> UpdateAsync(Charity c)
    {
        Charity originalCharity = await GetByIDAsync(c.ID);
        originalCharity.Name = c.Name;
        ctx.Entry(originalCharity).State = EntityState.Modified;
        await ctx.SaveChangesAsync();
        return originalCharity;
    }

    public async Task<CharityProduct> AddDonationRequestAsync(CharityProduct charityProduct)
    {
        charityProduct.ID = Guid.NewGuid();
        charityProduct.IsActive = true;
        if (charityProduct.CharityID == null) {
            throw new ArgumentException("Charity must be defined");
        }

        if (charityProduct.ProductID == null) {
            throw new ArgumentException("Product must be defined");
        }

        if (charityProduct.WeeklyQuantity < 1) {
            throw new ArgumentException("Quantity must be above zero");
        }

        this.ctx.Entry(charityProduct).State = EntityState.Added;
        await this.ctx.SaveChangesAsync();
        return charityProduct;
    }

    public async Task<CharityProduct> CancelDonationRequestByIDAsync(Guid id)
    {
        CharityProduct cp = await this.ctx.CharityProducts.FirstOrDefaultAsync(cp => cp.ID == id);

        if (!cp.IsActive) {
            throw new ArgumentException("This donation request is already inactive");
        }
        cp.IsActive = false;
        this.ctx.Entry(cp).State = EntityState.Modified;
        await this.ctx.SaveChangesAsync();
        return cp;
    }
}