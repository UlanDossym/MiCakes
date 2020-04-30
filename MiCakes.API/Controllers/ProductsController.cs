using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;
using Core.Interfaces;
using Core.Specifications;
using MiCakes.API.Dtos;
using System.Linq;
using AutoMapper;

namespace MiCakes.API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProductsController : ControllerBase
  {
    private readonly IGenericRepository<Product> _productsRepo;
    private readonly IGenericRepository<ProductBrand> _brandsRepo;
    private readonly IGenericRepository<ProductType> _typesRepo;
    private readonly IMapper _mapper;

    public ProductsController(
      IGenericRepository<Product> productsRepo,
      IGenericRepository<ProductBrand> brandsRepo,
      IGenericRepository<ProductType> typesRepo,
      IMapper mapper)
    {
      _brandsRepo = brandsRepo;
      _typesRepo = typesRepo;
      _mapper = mapper;
      _productsRepo = productsRepo;
    }

    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<ProductToReturnDto>>> GetProducts()
    {
      var spec = new ProductsWithTypesAndBrandsSpec();
      var products = await _productsRepo.ListAsync(spec);
      return Ok(_mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products));
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<ProductToReturnDto>> GetProduct(int id)
    {
      var spec = new ProductsWithTypesAndBrandsSpec(id);
      var product = await _productsRepo.GetEntityWithSpec(spec);
      return _mapper.Map<Product, ProductToReturnDto>(product);
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