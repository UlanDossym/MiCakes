using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;
using Core.Interfaces;
using Core.Specifications;

namespace MiCakes.API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProductsController : ControllerBase
  {
    private readonly IGenericRepository<Product> _productsRepo;
    private readonly IGenericRepository<ProductBrand> _brandsRepo;
    private readonly IGenericRepository<ProductType> _typesRepo;

    public ProductsController(
      IGenericRepository<Product> productsRepo,
      IGenericRepository<ProductBrand> brandsRepo,
      IGenericRepository<ProductType> typesRepo)
    {
      _brandsRepo = brandsRepo;
      _typesRepo = typesRepo;
      _productsRepo = productsRepo;
    }

    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetProducts()
    {
      var spec = new ProductsWithTypesAndBrandsSpec();
      var products = await _productsRepo.ListAsync(spec);
      return Ok(products);
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
      var spec = new ProductsWithTypesAndBrandsSpec(id);
      return Ok(await _productsRepo.GetEntityWithSpec(spec));
    }
    [HttpGet("brands")]
    public async Task<ActionResult<ProductBrand>> GetProductBrands()
    {
      var brands = await _brandsRepo.ListAllAsync();
      return Ok(brands);
    }
    [HttpGet("types")]
    public async Task<ActionResult<ProductBrand>> GetProductTypes()
    {
      var types = await _typesRepo.ListAllAsync();
      return Ok(types);
    }
  }
}