// Intl.DateTimeFormat() cosntructor
const date = new Date("2022-11-29T22:42:00.758Z");

new Intl.DateTimeFormat("en-US").format(date); // 11/30/2022
new Intl.DateTimeFormat("ko-KR").format(date); // 2022. 11. 30.
new Intl.DateTimeFormat("en-GB").format(date); // 30/11/2022

const options = {
  dateStyle: "medium",
  timeStyle: "full",
};

new Intl.DateTimeFormat("en-US", options).format(date); // Nov 30, 2022, 7:42:00 AM Korean Standard Time
new Intl.DateTimeFormat("ko-KR", options).format(date); // 2022. 11. 30. 오전 7시 42분 0초 대한민국 표준시

const options2 = {
  dateStyle: "medium",
  timeStyle: "full",
  calendar: "buddhist",
};

new Intl.DateTimeFormat("en-US", options2).format(date); // Nov 30, 2565 BE, 7:42:00 AM Korean Standard Time
new Intl.DateTimeFormat("ko-KR", options2).format(date); // 불기 2565. 11. 30. 오전 7시 42분 0초 대한민국 표준시

const options3 = {
  year: "2-digit",
  month: "short",
  weekday: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

new Intl.DateTimeFormat("en-US", options3).format(date); // Wed, Nov 30, 22, 7:42:00 AM
new Intl.DateTimeFormat("ko-KR", options3).format(date); // 22년 11월 30일 (수) 오전 7:42:00

const options4 = {
  year: "2-digit",
  month: "short",
  weekday: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/New_York",
  hour12: false,
};

new Intl.DateTimeFormat("en-US", options4).format(date); // Tue, Nov 29, 22, 17:42:00
new Intl.DateTimeFormat("ko-KR", options4).format(date); // 22년 11월 29일 (화) 17시 42분 0초

// Intl.NumberFormat() cosntructor
const number = 123456789;
new Intl.NumberFormat("ko-KR").format(number); // 123,456,789

const options5 = {
  style: "currency",
  currency: "krw",
};
new Intl.NumberFormat("ko-KR", options5).format(number); // ₩123,456,789

const options6 = {
  style: "currency",
  currency: "jpy",
  currencyDisplay: "name",
};

new Intl.NumberFormat("ko-KR", options6).format(number); // 123,456,789 일본 엔화
new Intl.NumberFormat("en-US", options6).format(number); // 123,456,789 Japanese yen

const options7 = {
  style: "currency",
  currency: "USD",
  ROUNDINGiNCREMENT: 5,
};

new Intl.NumberFormat("ko-KR", options7).format(25.98); // US$25.98
new Intl.NumberFormat("ko-KR", options7).format(488.12); // US$488.12
new Intl.NumberFormat("ko-KR", options7).format(15.27); // US$15.27

const number2 = 987;
const options8 = {
  style: "unit",
  unit: "kilometer-per-hour",
};
new Intl.NumberFormat("ko-KR", options8).format(number2); // 987km/h

const options9 = {
  style: "unit",
  unit: "gigabyte",
  unitDisplay: "long",
};
new Intl.NumberFormat("ko-KR", options9).format(number2); // 987기가바이트
new Intl.NumberFormat("en-US", options9).format(number2); // 987 gigabytes

const options10 = {
  notation: "compact",
};
new Intl.NumberFormat("ko-KR", options10).format(number); // 1.2억
new Intl.NumberFormat("en-US", options10).format(number); // 123M

new Intl.NumberFormat("ko-KR", { notation: "engineering" }).format(number); // 123.457E6
new Intl.NumberFormat("en-US", { notation: "scientific" }).format(number); // 1.235E8

// Intl.ListFormat() cosntructor
const fruits = ["Apple", "Banana", "Watermelon"];
const options11 = {
  style: "long",
  type: "conjunction",
};

new Intl.ListFormat("ko-KR", options11).format(fruits); // Apple, Banana 및 Watermelon
new Intl.ListFormat("en-US", options11).format(fruits); // Apple, Banana, and Watermelon

const options12 = {
  style: "long",
  type: "disjunction",
};
new Intl.ListFormat("ko-KR", options12).format(fruits); // Apple, Banana 또는 Watermelon
new Intl.ListFormat("en-US", options12).format(fruits); // Apple, Banana, or Watermelon

const temp = ["60", "30", "90"];
const options13 = {
  style: "long",
  type: "unit",
};

new Intl.ListFormat("ko-KR", options13).format(temp); // 60 30 90
new Intl.ListFormat("en-US", options13).format(temp); // 60, 30, 90

// Intl.RelativeTimeFormat() cosntructor
const number3 = 10;
new Intl.RelativeTimeFormat("ko-KR").format(number3, "second"); // 10초 후
new Intl.RelativeTimeFormat("ko-KR").format(number3, "minute"); // 10분 후
new Intl.RelativeTimeFormat("ko-KR").format(number3, "hour"); // 10시간 후
new Intl.RelativeTimeFormat("ko-KR").format(number3, "day"); // 10일 후
new Intl.RelativeTimeFormat("ko-KR").format(number3, "week"); // 10주 후
new Intl.RelativeTimeFormat("ko-KR").format(number3, "month"); // 10개월 후
new Intl.RelativeTimeFormat("ko-KR").format(number3, "quarter"); // 10분기 후
new Intl.RelativeTimeFormat("ko-KR").format(number3, "year"); // 10년 후

const number4 = -10;
new Intl.RelativeTimeFormat("ko-KR").format(number4, "second"); // 10초 전
new Intl.RelativeTimeFormat("ko-KR").format(number4, "minute"); // 10분 전
new Intl.RelativeTimeFormat("ko-KR").format(number4, "hour"); // 10시간 전
new Intl.RelativeTimeFormat("ko-KR").format(number4, "day"); // 10일 전
new Intl.RelativeTimeFormat("ko-KR").format(number4, "week"); // 10주 전
new Intl.RelativeTimeFormat("ko-KR").format(number4, "month"); // 10개월 전
new Intl.RelativeTimeFormat("ko-KR").format(number4, "quarter"); // 10분기 전
new Intl.RelativeTimeFormat("ko-KR").format(number4, "year"); // 10년 전
