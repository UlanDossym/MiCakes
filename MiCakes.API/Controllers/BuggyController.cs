using Infrastructure.Data;
using MiCakes.API.Errors;
using Microsoft.AspNetCore.Mvc;

namespace MiCakes.API.Controllers
{
  [ApiExplorerSettings(IgnoreApi = true)]
  public class BuggyController : BaseApiController
  {
    private readonly StoreContext _context;
    public BuggyController(StoreContext context)
    {
      _context = context;
    }

    [HttpGet("notfound")]
    public ActionResult GetNotFoundRequest()
    {
      var thing = _context.Products.Find(100);
      if (thing == null)
        return NotFound(new ApiResponse(404));
      return Ok();
    }
    [HttpGet("servererror")]
    public ActionResult GetServerError()
    {
      var thing = _context.Products.Find(100);
      var thingToReturn = thing.ToString();
      return Ok();
    }
    [HttpGet("badrequest")]
    public ActionResult GetBadRequest()
    {
      return BadRequest(new ApiResponse(400));
    }
    [HttpGet("badrequest/{id}")]
    public ActionResult GetBadRequest(int id)
    {
      return Ok();
    }
  }
}