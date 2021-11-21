using System.Net.Mime;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SuspendedStorefront.Models;
using SuspendedStorefront.Services;

namespace SuspendedStorefront.Controllers;

[Authorize]
[ApiController]
[Route("/api/[controller]")]
public class SubscriptionController : ControllerBase
{
    private readonly ISubscriptionService subscriptionService;
    private readonly ICustomerService customerService;

    public SubscriptionController(ISubscriptionService productService, ICustomerService customerService)
    {
        this.subscriptionService = productService;
        this.customerService = customerService;
    }

    private async Task<Guid> GetCustomerIDAsync() {
        return (await customerService.GetByLoginIDAsync(HttpContext.User.FindFirst(c => c.Type == ClaimTypes.NameIdentifier).Value)).ID;
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<IEnumerable<ProductSubscription>> GetList() =>
        await this.subscriptionService.GetActiveByCustomerAsync(await GetCustomerIDAsync());


    [HttpPost]
    [Consumes(MediaTypeNames.Application.Json)]
    [ProducesResponseType(typeof(ProductSubscription), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> Create([FromBody] ProductSubscription subscription)
    {

        subscription.CustomerID = await GetCustomerIDAsync();

        ProductSubscription p = await this.subscriptionService.AddSubscriptionAsync(subscription);
        return CreatedAtAction(nameof(GetByID), new { id = p.ID }, p);

    }

    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ProductSubscription> GetByID(Guid id) =>
        await this.subscriptionService.GetByIDAsync(id);

    [HttpPatch("{id}")]
    [Consumes(MediaTypeNames.Application.Json)]
    [ProducesResponseType(typeof(Product), StatusCodes.Status201Created)]
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

    [ProducesResponseType(typeof(Product), StatusCodes.Status200OK)]
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        await this.subscriptionService.MarkInactiveAsync(id);
        return Ok();
    }
}