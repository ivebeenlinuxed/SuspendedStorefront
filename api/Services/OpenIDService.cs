using System.Net;
using System.Net.Http;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;

namespace SuspendedStorefront.Services;

class OpenIDService : IOpenIDService {
    public async Task<JObject> GetProfileAsync(string token, string profileURL) {
        HttpClient client = new HttpClient();
        HttpRequestMessage req = new HttpRequestMessage();
        req.RequestUri = new Uri(profileURL);
        req.Headers.Add("Authorization", "Bearer "+token);
        HttpResponseMessage resp = await client.SendAsync(req);
        return JObject.Parse(await resp.Content.ReadAsStringAsync());



    }
}