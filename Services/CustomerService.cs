using SuspendedStorefront.Models;

namespace SuspendedStorefront.Services
{
    interface ICustomerService {
        Customer AddCustomer(Customer customer);

        CustomerAddress AddAddress(CustomerAddress address);
    }
}