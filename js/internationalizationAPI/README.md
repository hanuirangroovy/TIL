# InternationalizationAPI

> 숫자, 날짜, 목록까지 세계 다양한 언어와 형식으로 포맷할 수 있는 유용한 기능을 가지고 있음
>
> 다양한 것을 포맷하는 다양한 constructors(생성자)를 가짐
>
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl



- DateTimeFormat
  - 날짜, 시간 형식을 표시하는데 도움을 주는 생성자

- NumberFormat
  - 숫자 형식을 만드는데 도움을 주는 생성자
  - style, currency 옵션을 지정하면 숫자를 통화로 표시 가능
- ListFormat
  - 목록의 형식 지정 가능
- RelativeTimeFormat
  - 숫자 형식을 '하루 전','한달 후' 또는 '내일 후'로 표시 가능
  - '.format'메소드를 호출할 때 포맷할 단위를 지정