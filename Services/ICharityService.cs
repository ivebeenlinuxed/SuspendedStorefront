using SuspendedStorefront.Models;

namespace SuspendedStorefront.Services
{
    public interface ICharityService {
        Charity RegisterCharity();
        CharityProduct RequestDonation(CharityProduct charityProduct);

        Charity GetByID(Guid ID);
    }
}