using System.Net.Mime;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SuspendedStorefront.Models;
using SuspendedStorefront.Services;

namespace SuspendedStorefront.Controllers;

class SubscriptionController : ControllerBase {
    private readonly ISubscriptionService subscriptionService;

    public SubscriptionController(ISubscriptionService productService)
    {
        this.subscriptionService = productService;
    }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IEnumerable<ProductSubscription>> GetList() =>
            await this.subscriptionService.GetActiveAsync();


        [HttpPost]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(ProductSubscription),StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Create([FromBody] ProductSubscription subscription)
        {
            ProductSubscription p = await this.subscriptionService.AddSubscriptionAsync(subscription);
            return CreatedAtAction(nameof(GetByID), new { id = p.ID }, p);

        }

        public async Task<ProductSubscription> GetByID(Guid id) =>
            await this.subscriptionService.GetByIDAsync(id);

        [HttpPatch("{id}")]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(Product),StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(Guid id, [FromBody] ProductSubscription ps)
        {
            if (ps.ID != id)
            {
                return BadRequest("ID does not match the model");
            }
            ProductSubscription updatedSubscription = await this.subscriptionService.UpdateAsync(ps);
            return CreatedAtAction(nameof(GetByID), new { id = updatedSubscription.ID }, updatedSubscription);

        }
}