using System.IO;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using MiCakes.API.Errors;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Stripe;
using Order = Core.Entities.OrderAggregate.Order;

namespace MiCakes.API.Controllers
{
  public class PaymentsController : BaseApiController
  {
    private readonly IPaymentService _paymentService;
    private const string WhSecret = "whsec_d9P3U7XrUwYpBvMg6nAaQPha4ugglLRx";
    private readonly ILogger<IPaymentService> _logger;
    public PaymentsController(IPaymentService paymentService, ILogger<IPaymentService> logger)
    {
      _logger = logger;
      _paymentService = paymentService;
    }
    [HttpPost("{basketId}")]
    [Authorize]
    public async Task<ActionResult<CustomerBasket>> CreateOrUpdatePaymentIntent(string basketId)
    {
      var basket = await _paymentService.CreateOrUpdatePaymentIntent(basketId);
      if (basket == null)
        return BadRequest(new ApiResponse(400, "Problem with your basket"));
      return basket;
    }

    [HttpPost("webhook")]
    public async Task<ActionResult> StripeWebhook()
    {
      var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();
      var stripeEvent = EventUtility.ConstructEvent(json, Request.Headers["Stripe-Signature"], WhSecret);

      PaymentIntent intent;
      Order order;

      switch(stripeEvent.Type)
      {
        case "payment_intent.succeeded":
          intent = stripeEvent.Data.Object as PaymentIntent;
          _logger.LogInformation("Payment succeeded: ", intent.Id);
          order = await _paymentService.UpdateOrderPaymentSucceeded(intent.Id);
          _logger.LogInformation("Order updated to payment received: ", order.Id);
          break;
        case "payment_intent.payment_failed":
          intent = stripeEvent.Data.Object as PaymentIntent;
          _logger.LogInformation("Payment failed: ", intent.Id);
          order = await _paymentService.UpdateOrderPaymentFailed(intent.Id);
          _logger.LogInformation("Order updated to payment failed: ", order.Id);
          break;
      }
      return new EmptyResult();
    }
  }
}