namespace SuspendedStorefront.Models
{
    public class Customer {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public string Address1 { get; set; } = "";
        public string Address2 { get; set; } = "";
        public string City { get; set; } = "";
        public string County { get; set; } = "";
        public string PostalCode { get; set; } = "";
        public bool IsActive { get; set; }

        public IEnumerable<ProductSubscription> ProductSubscriptions { get; set; }
    }
}