using AutoMapper;
using Core.Entities.OrderAggregate;
using MiCakes.API.Dtos;
using Microsoft.Extensions.Configuration;

namespace MiCakes.API.Helpers
{
  public class OrderItemUrlResolver : IValueResolver<OrderItem, OrderItemDto, string>
  {
    private readonly IConfiguration _config;
    public OrderItemUrlResolver(IConfiguration config)
    {
      _config = config;
    }
    public string Resolve(OrderItem source, OrderItemDto destination, string destMember, ResolutionContext context)
    {
      if (!string.IsNullOrWhiteSpace(source.ItemOrdered.PictureUrl))
      {
        return _config["ApiUrl"] + source.ItemOrdered.PictureUrl;
      }
      return null;
    }
  }
}