using Microsoft.EntityFrameworkCore;

namespace SuspendedStorefront.Models
{
    class StoreDbContext : DbContext
    {
        public StoreDbContext(DbContextOptions<StoreDbContext> options) : base(options) {

        }
        public DbSet<Charity> Charities { get; set; }
        public DbSet<CharityProduct> CharityProducts { get; set; }

        public DbSet<Customer> Customers { get; set; }

        public DbSet<Product> Products { get; set; }

        public DbSet<ProductSubscription> ProductSubscriptions { get; set; }

        public DbSet<ProductSubscriptionReceipt> ProductSubscriptionReceipts { get; set; }
    }
}