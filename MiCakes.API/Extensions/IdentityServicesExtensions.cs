using Core.Entities.Identity;
using Infrastructure.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace MiCakes.API.Extensions
{
  public static class IdentityServicesExtensions
  {
    public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
    {
      var builder = services.AddIdentityCore<AppUser>();

      builder = new IdentityBuilder(builder.UserType, builder.Services);
      builder.AddEntityFrameworkStores<AppIdentityDbContext>();
      builder.AddSignInManager<SignInManager<AppUser>>();

      services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer( options => {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Token:Key"])),
                ValidIssuer = config["Token:Issuer"],
                ValidateAudience = false,
                ValidateIssuer = true
            };
        });

      return services;
    }
  }
}