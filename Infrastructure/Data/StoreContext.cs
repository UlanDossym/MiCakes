using System.Reflection;
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Core.Entities.OrderAggregate;
using System;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Infrastructure.Data
{
  public class StoreContext : DbContext
  {
    public StoreContext(DbContextOptions<StoreContext> options) : base(options)
    {
    }
    public DbSet<Product> Products { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderItem> OrderItems { get; set; }
    public DbSet<DeliveryMethod> DeliveryMethods { get; set; }
    public DbSet<ProductBrand> ProductBrands { get; set; }
    public DbSet<ProductType> ProductTypes { get; set; }
    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);
      builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
      if (Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite")
      {
        // workaround for decimal types in Sqlite
        foreach (var entityType in builder.Model.GetEntityTypes())
        {
          var props = entityType.ClrType.GetProperties()
            .Where(p => p.PropertyType == typeof(decimal));

          var dateTimeProps = entityType.ClrType.GetProperties()
            .Where(p => p.PropertyType == typeof(DateTimeOffset));

          foreach (var prop in props)
          {
            builder.Entity(entityType.Name).Property(prop.Name).HasConversion<double>();
          }

          foreach (var prop in dateTimeProps)
          {
            builder.Entity(entityType.Name).Property(prop.Name)
              .HasConversion(new DateTimeOffsetToBinaryConverter());
          }
        };
      }
    }
  }
}