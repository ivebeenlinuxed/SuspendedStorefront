using Newtonsoft.Json.Linq;

namespace SuspendedStorefront.Services
{
    interface IOpenIDService
    {
        Task<JObject> GetProfileAsync(string token, string profileURL);
    }
}