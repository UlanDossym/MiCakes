using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
  public class StoreContextSeed
  {
    public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory)
    {
      try
      {
        if (!context.ProductBrands.Any())
        {
          var data = File.ReadAllText("../Infrastructure/Data/SeedData/brands.json");
          var brands = JsonSerializer.Deserialize<List<ProductBrand>>(data);
          brands.ForEach(item => context.ProductBrands.Add(item));
          await context.SaveChangesAsync();
        }
        if (!context.ProductTypes.Any())
        {
          var data = File.ReadAllText("../Infrastructure/Data/SeedData/types.json");
          var types = JsonSerializer.Deserialize<List<ProductType>>(data);
          types.ForEach(item => context.ProductTypes.Add(item));
          await context.SaveChangesAsync();
        }
        if (!context.Products.Any())
        {
          var data = File.ReadAllText("../Infrastructure/Data/SeedData/products.json");
          var products = JsonSerializer.Deserialize<List<Product>>(data);
          products.ForEach(item => context.Products.Add(item));
          await context.SaveChangesAsync();
        }
      }
      catch (Exception e)
      {
        var logger = loggerFactory.CreateLogger<StoreContextSeed>();
        logger.LogError(e.Message);
      }
    }
  }
}