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

    public async Task<Charity> GetByIDAsync(Guid ID)
    {
        return await ctx.Charities.FirstOrDefaultAsync(c => c.ID == ID);
    }

    public async Task<Charity> RegisterCharityAsync(Charity charity)
    {
        charity.ID = Guid.NewGuid();
        charity.IsActive = true;
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

    public async Task<Charity> UpdateAsync(Charity c)
    {
        Charity originalCharity = await GetByIDAsync(c.ID);
        originalCharity.CharityName = c.CharityName;
        ctx.Entry(originalCharity).State = EntityState.Modified;
        await ctx.SaveChangesAsync();
        return originalCharity;
    }
}