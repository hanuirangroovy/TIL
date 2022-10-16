using Microsoft.AspNetCore.Mvc;
using NetCore.Data.ViewModels;
using NetCore.Services.Interfaces;
using NetCore.Services.Svcs;
using NetCore.Web.Models;

namespace NetCore.Web.Controllers
{
    public class MembershipController : Controller
    {
        // 의존성 주입 - 생성자
        // private IUser _user = new UserService();
        private IUser _user;
        public MembershipController(IUser user)
        {
            _user = user;
        }
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
        // Services => Web , Web 프로젝트가 Services 프로젝트를 참조하고 있음
        // Data => Services , Services 프로젝트는 View Model과 Data Model을 사용하기 위해 Data 프로젝트 참조를 받고 있음 
        // Data => Web , Data 프로젝트로 Web 프로젝트에서  View Model을 위해 사용하려고 하는데 Services가 Data를 참조하고 있기때문에 Web 프로젝트는 Data를 참조하고 있음 
        public IActionResult Login(LoginInfo login)
        {
            string message = string.Empty;
            if (ModelState.IsValid)
            {
                // 뷰모델
                // 서비스 개념
                if (_user.MatchTheUserInfo(login))
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
