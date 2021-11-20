namespace SuspendedStorefront.Models
{
    public class CustomerAddress
    {
        public Guid ID { get; set; }
        public Guid CustomerID { get; set; }
        public string Address1 { get; set; } = "";
        public string Address2 { get; set; } = "";
        public string City { get; set; } = "";
        public string County { get; set; } = "";
        public string PostalCode { get; set; } = "";
    }
}