namespace SuspendedStorefront.Models
{
    public class Charity
    {

        public Guid ID { get; set; }

        public Guid AdministratorID { get; set; }
        public string Name { get; set; }

        public string PictureURL { get; set; }
        public string Address1 { get; set; } = "";
        public string Address2 { get; set; } = "";
        public string City { get; set; } = "";
        public string County { get; set; } = "";
        public string PostalCode { get; set; } = "";

        public bool IsActive { get; set; }

        public int Status { get; set; }

        public Customer Administrator { get; set; }

        public IEnumerable<CharityProduct> CharityProducts {get;set;}

}
}