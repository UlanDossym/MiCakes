using System.Security.Claims;
using System.Threading.Tasks;
using Core.Entities.Identity;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace MiCakes.API.Extensions
{
  public static class UserManagerExtensions
  {
    public static async Task<AppUser> FindUserByClaimsPrincipalWithAddressAsync(
        this UserManager<AppUser> input, ClaimsPrincipal user)
    {
      var email = user?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
      return await input.Users.
          Include(x => x.Address).
          FirstOrDefaultAsync(x => x.Email == email);
    }
    public static async Task<AppUser> FindByEmailFromClaimsPrincipal(
        this UserManager<AppUser> input, ClaimsPrincipal user)
    {
      var email = user?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
      return await input.Users.
          FirstOrDefaultAsync(x => x.Email == email);
    }
  }
}