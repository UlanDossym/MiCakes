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
using MiCakes.API.Errors;
using Microsoft.AspNetCore.Http;
using MiCakes.API.Helpers;

namespace MiCakes.API.Controllers
{
  public class ProductsController : BaseApiController
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
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
    public async Task<ActionResult<Pagination<ProductToReturnDto>>> GetProducts(
      [FromQuery]ProductSpecParams productParams)
    {
      var spec = new ProductsWithTypesAndBrandsSpec(productParams);
      var countSpec = new ProductsWithFiltersAndCountSpec(productParams);
      var totalItems = await _productsRepo.CountAsync(countSpec);
      var products = await _productsRepo.ListAsync(spec);
      var data = _mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products);
      return Ok(new Pagination<ProductToReturnDto>(productParams.PageIndex, productParams.PageSize, totalItems, data));
    }
    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
    public async Task<ActionResult<ProductToReturnDto>> GetProduct(int id)
    {
      var spec = new ProductsWithTypesAndBrandsSpec(id);
      var product = await _productsRepo.GetEntityWithSpec(spec);
      if (product == null)
        return NotFound(new ApiResponse(404));
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