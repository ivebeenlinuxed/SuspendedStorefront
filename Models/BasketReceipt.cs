namespace SuspendedStorefront.Models
{
    public class BasketReceipt
    {
        public Guid ID { get; set; }
        public Guid RecurringBasketID { get; set; }

        public DateTime ExecutedDate { get; set; }


    }
}