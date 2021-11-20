namespace SuspendedStorefront.Models
{
    public class RecurringBasket
    {
        public Guid ID { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;

        public Guid CustomerID { get; set; }
        public Guid DeliveryAddressID { get; set; }

    }
}