using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;

namespace MiCakes.API.Extensions
{
  public static class SwaggerServiceExtensions
  {
    public static IServiceCollection AddSwaggerDoc(this IServiceCollection services)
    {
      services.AddSwaggerGen(c =>
       {
         c.SwaggerDoc("v1", new OpenApiInfo { Title = "MiCakes API", Version = "v1" });
         var securitySchema = new OpenApiSecurityScheme
         {
           Description = "JWT Auth Bearer Scheme",
           Name = "Authorization",
           In = ParameterLocation.Header,
           Type = SecuritySchemeType.Http,
           Scheme = "bearer",
           Reference = new OpenApiReference
           {
             Type = ReferenceType.SecurityScheme,
             Id = "Bearer"
           }
         };
         c.AddSecurityDefinition("Bearer", securitySchema);
         var securityReq = new OpenApiSecurityRequirement{{securitySchema, new []{"Bearer"}}};
         c.AddSecurityRequirement(securityReq);
       }
      );
      return services;
    }
    public static IApplicationBuilder UseSwaggerDoc(this IApplicationBuilder app)
    {
      app.UseSwagger();
      app.UseSwaggerUI(c =>
      {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "MiCakes API v1");
      });
      return app;
    }
  }
}