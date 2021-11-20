using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SuspendedStorefront.Models;
using SuspendedStorefront.Services;

namespace SuspendedStorefront.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class CharityController : ControllerBase
    {
        private readonly ICharityService charityService;

        public CharityController(ICharityService charityService)
        {
            this.charityService = charityService;
        }


        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        public async Task<IEnumerable<Charity>> GetList() =>
            await this.charityService.GetActiveAsync();


        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpPost]
        public async Task<IActionResult> CreateCharity([FromBody] Charity charity)
        {
            Charity c = await this.charityService.RegisterCharityAsync(charity);
            return CreatedAtAction(nameof(GetByID), new { id = c.ID }, c);

        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<Charity> GetByID(Guid id) =>
            await this.charityService.GetByIDAsync(id);

        [HttpPatch("{id}")]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status201Created)]
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