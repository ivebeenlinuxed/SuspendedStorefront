namespace SuspendedStorefront.Models
{
    public class CharityProduct
    {
        public Guid ID { get; set; }
        public Guid CharityID { get; set; }

        public Guid ProductID { get; set; }

        public int WeeklyQuantity { get; set; }

        public bool IsActive { get; set; }

        public DateTime LastDelivery { get; set; }

        public Charity Charity { get; set; }
        public Product Product { get; set; }
    }
}