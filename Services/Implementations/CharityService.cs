using Microsoft.EntityFrameworkCore;
using SuspendedStorefront.Models;

namespace SuspendedStorefront.Services;

class CharityService : ICharityService
{
    private readonly StoreDbContext ctx;

    public CharityService(StoreDbContext ctx) {
        this.ctx = ctx;
    }
    public async Task<IEnumerable<Charity>> GetActiveAsync()
    {
        return await this.ctx.Charities.Where(c => c.IsActive).ToListAsync();
    }

    public async Task<Charity> GetByIDAsync(Guid ID)
    {
        return await this.ctx.Charities.FirstOrDefaultAsync(c => c.ID == ID);
    }

    public async Task<Charity> RegisterCharityAsync(Charity charity)
    {
        charity.ID = Guid.NewGuid();
        charity.IsActive = true;
        this.ctx.Entry(charity).State = EntityState.Added;
        await this.ctx.SaveChangesAsync();
        return charity;
    }

    public async Task<CharityProduct> RequestDonationAsync(CharityProduct charityProduct)
    {
        charityProduct.IsActive = true;
        this.ctx.Entry(charityProduct).State = EntityState.Added;
        await this.ctx.SaveChangesAsync();
        return charityProduct;

    }

    public async Task<Charity> SetInactiveByIDAsync(Guid ID)
    {
        Charity c = await this.GetByIDAsync(ID);
        c.IsActive = false;
        this.ctx.Entry(c).State = EntityState.Modified;
        await this.ctx.SaveChangesAsync();
        return c;
        
    }

    public async Task<Charity> UpdateAsync(Charity c)
    {
        Charity originalCharity = await this.GetByIDAsync(c.ID);
        originalCharity.CharityName = c.CharityName;
        this.ctx.Entry(originalCharity).State = EntityState.Modified;
        await this.ctx.SaveChangesAsync();
        return originalCharity;
    }
}