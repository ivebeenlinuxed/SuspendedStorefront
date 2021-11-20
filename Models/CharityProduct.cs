namespace SuspendedStorefront.Models
{
    public class CharityProduct
    {
        public Guid ID { get; set; }
        public Guid CharityID { get; set; }

        public Guid ProductID { get; set; }

        public int WeeklyQuantity { get; set; }
    }
}