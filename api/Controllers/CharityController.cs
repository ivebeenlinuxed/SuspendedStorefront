using System.Net.Mime;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SuspendedStorefront.Models;
using SuspendedStorefront.Services;

namespace SuspendedStorefront.Controllers
{
    [Authorize]
    [ApiController]
    [Route("/api/[controller]")]
    public class CharityController : ControllerBase
    {
        private readonly ICharityService charityService;
        private readonly ICustomerService customerService;

        public CharityController(ICharityService charityService, ICustomerService customerService)
        {
            this.charityService = charityService;
            this.customerService = customerService;
        }

        private async Task<Guid> GetCustomerIDAsync() {
            return (await customerService.GetByLoginIDAsync(HttpContext.User.FindFirst(c => c.Type == ClaimTypes.NameIdentifier).Value)).ID;
        }


        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        public async Task<IEnumerable<Charity>> GetList() =>
            await this.charityService.GetActiveByCustomerIDAsync(await GetCustomerIDAsync());


        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(Charity), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpPost]
        public async Task<IActionResult> CreateCharity([FromBody] Charity charity)
        {
            charity.AdministratorID = await GetCustomerIDAsync();
            Charity c = await this.charityService.RegisterCharityAsync(charity);
            return CreatedAtAction(nameof(GetByID), new { id = c.ID }, c);

        }

        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(CharityProduct), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpPost("{id}/charity_product")]
        public async Task<IActionResult> CreateCharityProduct(Guid id, [FromBody] CharityProduct charityProduct)
        {
            if (charityProduct.CharityID != id) {
                return BadRequest("Charity ID in the object must match URL");
            }
            CharityProduct c = await this.charityService.AddDonationRequestAsync(charityProduct);
            return CreatedAtAction(nameof(GetByID), new { id = c.ID }, c);

        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpDelete("{charityID}/charity_product/{charityProductID}")]
        public async Task<IActionResult> CreateCharityProduct(Guid charityID, Guid charityProductID)
        {
            await this.charityService.CancelDonationRequestByIDAsync(charityProductID);
            return Ok();

        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<Charity> GetByID(Guid id) =>
            await this.charityService.GetByIDAsync(id);

        [HttpPatch("{id}")]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(Charity), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(Guid id, [FromBody] Charity c)
        {
            if (c.ID != id)
            {
                return BadRequest("ID does not match the model");
            }
            Charity updatedCharity = await this.charityService.UpdateAsync(c);
            return CreatedAtAction(nameof(GetByID), new { id = c.ID }, updatedCharity);

        }

    }
}