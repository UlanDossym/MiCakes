using System.IO;
using AutoMapper;
using Infrastructure.Data;
using Infrastructure.Identity;
using MiCakes.API.Extensions;
using MiCakes.API.Helpers;
using MiCakes.API.Middleware;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using StackExchange.Redis;

namespace MiCakes.API
{
  public class Startup
  {
    private readonly IConfiguration _config;
    public Startup(IConfiguration config)
    {
      _config = config;
    }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddAutoMapper(typeof(MappingProfiles));
      services.AddControllers();

      services.AddDbContext<StoreContext>(x =>
        x.UseSqlite(_config.GetConnectionString("DefaultConnection")));
      services.AddDbContext<AppIdentityDbContext>(x =>
      {
        x.UseSqlite(_config.GetConnectionString("IdentityConnection"));
      });
      services.AddIdentityServices(_config);
      services.AddSingleton<IConnectionMultiplexer>(c =>
      {
        var config = ConfigurationOptions.Parse(_config
          .GetConnectionString("Redis"), true);
        return ConnectionMultiplexer.Connect(config);
      });
      services.AddApplicationServices();
      services.AddSwaggerDoc();
      services.AddCors(opt =>
      {
        opt.AddPolicy("CorsPolicy", policy =>
        {
          policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200");
        });
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      app.UseMiddleware<ExceptionMiddleware>();
      app.UseStatusCodePagesWithReExecute("/errors/{0}");
      app.UseHttpsRedirection();

      app.UseRouting();
      app.UseStaticFiles();
      app.UseStaticFiles(new StaticFileOptions
      {
        FileProvider = new PhysicalFileProvider(
          Path.Combine(Directory.GetCurrentDirectory(), "Content")
        ), RequestPath = "/content"
      });
      app.UseCors("CorsPolicy");

      app.UseAuthentication();
      app.UseAuthorization();

      app.UseSwaggerDoc();
      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
        endpoints.MapFallbackToController("Index", "Fallback");
      });
    }
  }
}
