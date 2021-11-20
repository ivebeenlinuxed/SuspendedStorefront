namespace SuspendedStorefront.Models
{
    public class BasketReceiptProduct
    {
        public Guid ID { get; set; }

        public Guid BasketReceiptID { get; set; }
        public Guid RecurringBasketProduct { get; set; }

        public int CustomerQtyFulfilled { get; set; }

        public int CharityQtyFulfilled { get; set; }
    }
}