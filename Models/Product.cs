namespace SuspendedStorefront.Models
{
    public class Product
    {
        public Guid ID { get; set; }
        public string Name { get; set; }

        public decimal Price { get; set; }
        public bool IsActive { get; set; }
    }
}