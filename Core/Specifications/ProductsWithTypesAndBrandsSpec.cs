using Core.Entities;

namespace Core.Specifications
{
  public class ProductsWithTypesAndBrandsSpec : BaseSpecification<Product>
  {
    public ProductsWithTypesAndBrandsSpec(string sort, int? brandId, int? typeId)
      : base(x =>
        (!brandId.HasValue || x.ProductBrandId == brandId) &&
        (!typeId.HasValue || x.ProductTypeId == typeId)
      )
    {
      AddInclude(x => x.ProductBrand);
      AddInclude(x => x.ProductType);
      AddOrderBy(x => x.Name);
      if (!string.IsNullOrWhiteSpace(sort))
      {
        switch (sort)
        {
          case "priceAsc":
            AddOrderBy(p => p.Price);
            break;
          case "priceDesc":
            AddOrderByDesc(p => p.Price);
            break;
          default:
            AddOrderBy(p => p.Name);
            break;
        }
      }
    }
    public ProductsWithTypesAndBrandsSpec(int id) : base(x => x.Id == id)
    {
      AddInclude(x => x.ProductBrand);
      AddInclude(x => x.ProductType);
    }
  }
}