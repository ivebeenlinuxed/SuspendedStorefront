namespace SuspendedStorefront.Models
{
    public class RecurringBasketProduct
    {
        public Guid ID { get; set; }
        public Guid RecurringBasketID { get; set; }

        public Guid ProductID { get; set; }

        public int Quantity { get; set; }

        public int SuspendedQuantity { get; set; }


    }
}