using NetCore.Data.DataModels;
using NetCore.Data.ViewModels;
using NetCore.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetCore.Services.Svcs
{
    public class UserService : IUser
    {
        #region private methods
        private IEnumerable<User> GetUserInfos() // 사용자 정보가 담긴 테이블을 만들어야 함. 이름은 user. user 정보들을 list로 담아오는 method 만듦. 데이터베이스와 연동해서 작업하기 위한 모델 필요한데 이게 Data Model. 이것을 위해 NetCore.Data 프로젝트 추가. 
        {
            return new List<User>()
            {
                new User()
                {
                    UserId = "jiaiha",
                    UserName = "하지애",
                    UserEmail = "jiaiha@naver.com",
                    Password = "123456"
                }
            };
        }

        private bool checkTheUserInfo(string userId, string password)   // 사용자 정보 체크하는 method
        {
            return GetUserInfos().Where(u => u.UserId.Equals(userId) && u.Password.Equals(password)).Any();
        }


        #endregion
        bool IUser.MatchTheUserInfo(LoginInfo login)
        {
            return checkTheUserInfo(login.UserId, login.Password);
        }
    }
}
