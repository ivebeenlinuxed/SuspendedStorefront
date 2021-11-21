using System.Net.Mime;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SuspendedStorefront.Models;
using SuspendedStorefront.Services;

namespace SuspendedStorefront.Controllers;


[ApiController]
[Route("/api/[controller]")]
public class ProductController : ControllerBase {
    private readonly IProductService productService;
    private readonly ICustomerService customerService;

    public ProductController(IProductService productService, ICustomerService customerService)
    {
        this.productService = productService;
        this.customerService = customerService;
    }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IEnumerable<Product>> GetList() =>
            await this.productService.GetActiveAsync();


        [HttpPost]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(Product),StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Create([FromBody] Product product)
        {
            Product p = await this.productService.AddProductAsync(product);
            return CreatedAtAction(nameof(GetByID), new { id = p.ID }, p);

        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<Product> GetByID(Guid id, [FromQuery]bool asMe=false) {
            if (asMe && HttpContext.User.Identity.IsAuthenticated)
            {
                return await this.customerService.GetProductAsCustomer(id, (await customerService.GetByLoginIDAsync(HttpContext.User.FindFirst(c => c.Type == ClaimTypes.NameIdentifier).Value)).ID);
            } else {
                
                return await this.productService.GetByIDAsync(id);
            }
        }



        [HttpPatch("{id}")]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(Product),StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(Guid id, [FromBody] Product p)
        {
            if (p.ID != id)
            {
                return BadRequest("ID does not match the model");
            }
            Product updatedProduct = await this.productService.UpdateAsync(p);
            return CreatedAtAction(nameof(GetByID), new { id = updatedProduct.ID }, updatedProduct);

        }
}