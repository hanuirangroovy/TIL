using Microsoft.AspNetCore.Mvc;

namespace NetCore.Web.Controllers
{
    public class Membership : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
