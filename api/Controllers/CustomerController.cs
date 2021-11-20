using System.Net.Mime;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SuspendedStorefront.Models;
using SuspendedStorefront.Services;

namespace SuspendedStorefront.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class CustomerController : ControllerBase {
    private readonly ICustomerService customerService;

    public CustomerController(ICustomerService customerService)
    {
        this.customerService = customerService;
    }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IEnumerable<Customer>> GetList() =>
            await this.customerService.GetActiveAsync();


        [HttpPost]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(Customer),StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Create([FromBody] Customer customer)
        {
            Customer c = await this.customerService.AddCustomerAsync(customer);
            return CreatedAtAction(nameof(GetByID), new { id = c.ID }, c);

        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<Customer> GetByID(Guid id) =>
            await this.customerService.GetByIDAsync(id);

        [HttpPatch("{id}")]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(Customer),StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(Guid id, [FromBody] Customer c)
        {
            if (c.ID != id)
            {
                return BadRequest("ID does not match the model");
            }
            Customer updatedCustomer = await this.customerService.UpdateAsync(c);
            return CreatedAtAction(nameof(GetByID), new { id = updatedCustomer.ID }, updatedCustomer);

        }
}