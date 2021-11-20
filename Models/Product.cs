namespace SuspendedStorefront.Models
{
    public class Product
    {
        public Guid ID { get; set; }
        public string ProductName { get; set; }

        public decimal ProductPrice { get; set; }
    }
}