using Microsoft.AspNetCore.Mvc;
using NetCore.Web.Models;

namespace NetCore.Web.Controllers
{
    public class Membership : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken] // 유효성 검증
        public IActionResult Login(LoginInfo login)
        {
            string message = string.Empty;
            if (ModelState.IsValid)
            {
                string userId = "jiaiha";
                string password = "123456";
                if (login.UserId.Equals(userId) && login.Password.Equals(password))
                {
                    TempData["Message"] = "로그인이 성공적으로 이루어졌습니다.";
                    return RedirectToAction("Index", "Membership");
                }
                else
                {
                    message = "로그인되지 않았습니다.";
                }
            }
            else
            {
                message = "로그인 정보를 올바르게 입력하세요.";
            }
            ModelState.AddModelError(string.Empty, message);
            return View(login);
        }
    }
}
