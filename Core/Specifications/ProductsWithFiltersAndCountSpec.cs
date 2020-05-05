using Core.Entities;

namespace Core.Specifications
{
  public class ProductsWithFiltersAndCountSpec : BaseSpecification<Product>

  {
    public ProductsWithFiltersAndCountSpec(ProductSpecParams productParams)
    : base(x =>
        (string.IsNullOrWhiteSpace(productParams.Search) || x.Name.ToLower().Contains(productParams.Search)) &&
        (!productParams.BrandId.HasValue || x.ProductBrandId == productParams.BrandId) &&
        (!productParams.TypeId.HasValue || x.ProductTypeId == productParams.TypeId)
      )
    {
    }
  }
}