namespace SuspendedStorefront.Models
{
    public class ProductSubscriptionReceipt
    {
        public Guid ID { get; set; }

        public Guid ProductSubscriptionID { get; set; }

        public int CustomerQtyFulfilled { get; set; }

        public int CharityQtyFulfilled { get; set; }
        public string Address1 { get; set; } = "";
        public string Address2 { get; set; } = "";
        public string City { get; set; } = "";
        public string County { get; set; } = "";
        public string PostalCode { get; set; } = "";
    }
}