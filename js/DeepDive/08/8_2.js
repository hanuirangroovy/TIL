// 8.2 조건문
// 08-02
var num = 2;
var kind;

// if 문
if (num > 0) {
  kind = "양수"; // 음수를 구별할 수 없다
}
console.log(kind); // 양수

// if... else if 문
if (num > 0) {
  kind = "양수";
} else if (num < 0) {
  kind = "음수";
} else {
  kind = "영";
}
console.log(kind); // 양수

// 08-03
var num = 2;
var kind;

if (num > 0) kind = "양수";
else if (num < 0) kind = "음수";
else kind = "영";

console.log(kind); // 양수

// 08-04
// x가 짝수이면 result 변수에 문자열 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당한다.
var x = 2;
var result;
if (x % 2) {
  // 2 % 2 는 0이다. 이때 0은 false는 암묵적 강제 변환된다.
  result = "홀수";
} else {
  result = "짝수";
}

console.log(result); // 짝수

// 08-05
var x = 2;
// 0은 false로 취급된다.
var result = x % 2 ? "홀수" : "짝수";
console.log(result); // 짝수

// 08-06
var num = 2;
// 0은 false로 취급된다.
var kind = num ? (num > 0 ? "양수" : "음수") : "영";

console.log(kind); // 양수

// 08-07
// 월을 영어로 변환한다. (11 -> 'November')
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = "January";
  case 2:
    monthName = "February";
  case 3:
    monthName = "March";
  case 4:
    monthName = "April";
  case 5:
    monthName = "May";
  case 6:
    monthName = "June";
  case 7:
    monthName = "July";
  case 8:
    monthName = "August";
  case 9:
    monthName = "September";
  case 10:
    monthName = "October";
  case 11:
    monthName = "November";
  case 12:
    monthName = "December";
  default:
    monthName = "Invalid month";
}

console.log(monthName); // Invalid month -> break문 없기에 fall through

// 08-08
// 월을 영어로 변환한다. (11 -> 'November')
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Invalid month";
}

console.log(monthName); // November

// 08-09
var year = 2000; // 2000은 윤년으로 2월이 29일이다.
var month = 2;
var days = 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    // 윤년 계산 알고리즘
    // 1. 연도가 4로 나누어떨어지는 해 (2000, 2004, 2008, 2012, 2016, 2020...)는 윤년이다.
    // 2. 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어떨어지는 해 (2000, 2100, 2200...)는 평년이다.
    // 3. 연도가 400으로 나누어떨어지는 해(2000, 2400, 2800...)는 윤년이다.
    days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    break;
  default:
    console.log("Invalid month");
}

console.log(days); // 29
