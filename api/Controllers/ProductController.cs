using System.Net.Mime;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SuspendedStorefront.Models;
using SuspendedStorefront.Services;

namespace SuspendedStorefront.Controllers;


[ApiController]
[Route("/api/[controller]")]
public class ProductController : ControllerBase {
    private readonly IProductService productService;

    public ProductController(IProductService productService)
    {
        this.productService = productService;
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
        public async Task<Product> GetByID(Guid id) =>
            await this.productService.GetByIDAsync(id);

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