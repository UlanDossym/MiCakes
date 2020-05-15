using System.Linq;
using Core.Interfaces;
using Infrastructure.Data;
using MiCakes.API.Errors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace MiCakes.API.Extensions
{
  public static class ApplicationServicesExtensions
  {
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
      services.AddScoped<IProductRepository, ProductRepository>();
      services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
      services.AddScoped<IBasketRepository, BasketRepository>();
      services.Configure<ApiBehaviorOptions>(o =>
      {
        o.InvalidModelStateResponseFactory = actionContext =>
        {
          var errors = actionContext.ModelState
            .Where(i => i.Value.Errors.Count > 0)
            .SelectMany(x => x.Value.Errors)
            .Select(x => x.ErrorMessage)
            .ToArray();
          var errorResponse = new ApiValidationErrorResponse
          {
            Errors = errors
          };
          return new BadRequestObjectResult(errorResponse);
        };
      });
      return services;
    }
  }
}