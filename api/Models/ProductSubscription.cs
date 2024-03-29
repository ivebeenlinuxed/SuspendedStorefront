namespace SuspendedStorefront.Models
{
    public class ProductSubscription
    {
        public Guid ID { get; set; }
        public Guid RecurringBasketID { get; set; }

        public Guid ProductID { get; set; }

        public Guid CustomerID { get; set; }

        public bool IsActive { get; set; }

        public Guid PreviousSubscriptionID { get; set; }

        public int MondayQuantity { get; set; }
        public int TuesdayQuantity { get; set; }
        public int WednesdayQuantity { get; set; }
        public int ThursdayQuantity { get; set; }
        public int FridayQuantity { get; set; }
        public int SaturdayQuantity { get; set; }
        public int SundayQuantity { get; set; }

        public int MaxSuspendedQuantity { get; set; }

        public Customer Customer { get; set; }
        public Product Product { get; set; }


    }
}