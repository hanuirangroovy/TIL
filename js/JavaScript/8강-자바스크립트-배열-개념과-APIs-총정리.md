# 자바스크립트 배열 개념과 APIs 총정리 (JavaScript ES6)

[자바스크립트 기초 강의 8]: https://www.youtube.com/watch?v=yOdAVDuHUKQ&amp;list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&amp;index=8



- Object와 자료구조의 차이
  - Object = 서로 연관된 특징과 행동들을 묶어놓는 것
  - 자료구조 = 비슷한 type의 Object들을 묶어놓는 것. 
  - 보통은 자료구조에 동일한 type의 Object를 담을 수만 있음. 
  - 하지만 JavaScript는 dynamically typed language로 type이 없기에 다양한 종류의 data를 담을 수 있음. 이런 시긍로 프로그래밍 하는 것은 좋지 않음.
  - 어떤 문제를 해결하냐에 따라서 많은 자료구조 중에 어떤 자료구조를 선택하는지 . 그 선택할 때 검색, 삽입, 정렬, 삭제 이런 속도들을 고려해서 BIG-O를 고려해서 사용하는 게 중요

- 배열 : 칸칸이 촘촘히 모여있는 자료구조. 
  - index가 지정되어 있음. index는 0부터 시작.
  - 한 배열 안에는 동일한 type의 data를 넣는 게 중요. JavaScript에서는 가능하지만 그렇게 되도록이면 하지않는 게 좋음.
  - 삭제를 원한다면 index로 접근이 가능하기 때문에 삭제 가능

