using Microsoft.EntityFrameworkCore;

namespace SuspendedStorefront.Models
{
    class StoreDbContext : DbContext
    {
        public StoreDbContext(DbContextOptions<StoreDbContext> options) : base(options) {
            
        }
        DbSet<Charity> Charities { get; set; }
        DbSet<CharityProduct> CharityProducts { get; set; }

        DbSet<Customer> Customers { get; set; }

        DbSet<Product> Products { get; set; }

        DbSet<ProductSubscription> ProductSubscriptions { get; set; }

        DbSet<ProductSubscriptionReceipt> ProductSubscriptionReceipts { get; set; }
    }
}