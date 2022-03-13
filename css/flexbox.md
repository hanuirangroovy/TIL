# Flexbox

[CSS Flexbox 완전 정리]: https://www.youtube.com/watch?v=7neASrWEFEM
[jsbin.com 실습]: https://jsbin.com/?html,output



- Flexbox는 container에 적용되는 속성값과 각각의 item들에 적용되는 속성값들이 따로 있다.

- Flexbox에는 중심축과 반대축이 있다.
  - main axis, cross axis
  - 중심을 수평, 수직 어디에 두느냐에 따라 반대축이 바뀐다.
- 자동 생성
  - `div.container>div.item.item${$}*10`



## container

- display
  - `dispplay: flex;` : item이 자동적으로 왼쪽에서 오른쪽으로 정렬
- flex-direction
  - 기본값은 row
  - `flex-direction: row;` : 왼쪽에서 오른쪽으로 가는 방향
  - `flex-direction: row-reverse;` : 오른쪽에서 왼쪽으로 가는 방향
  - `flex-direction: column;` : 위에서 아래로 가는 방향
  - `flex-direction: column-reverse;` : 아래에서 위로 가는 방향
- flex-wrap
  - 기본값은 nowrap
  - `flex-wrap: nowrap;` : 아이템들이 많아지면 한 줄에 빼곡하게 붙어있음
  - `flex-wrap: wrap;` : 아이템들이 한 줄에 꽉 차게 되면 자동적으로 다음 줄로 넘어감
  - `flex-wrap: wrap-reverse;` : 거꾸로 위에서부터 반대로 wrapping
- flex-flow
  - flex-direction, flex-wrap 합한 것
  - `flex-flow: column nowrap;`
- justify-content
  - 중심축에서 item을 어떻게 배치할건지, 기본값은 flex-start
  - `justify-content: flex-start;`: 왼쪽에서 오른쪽으로, 수직축이 중심축이라면 위에서 아래로
  - `justify-content: flex-end;`: 오른쪽 축으로 item 배치
  - `justify-content: center;`: item 가운데 정렬
  - `justify-content: space-around;`: box를 둘러싸게 space를 넣어주는 것
  - `justify-content: space-evenly;`: 똑같은 간격을 넣어주는 것
  - `justify-content: space-between;`: 왼쪽과 오른쪽 item은 딱 붙고 중간은 똑같은 간격을 넣어주는 것
- align-items
  - 반대축에서 item 배치하는 속성 값
  - `align-item: center;`: 중심축에서 item 배치
  - `align-item: baseline;`: text가 균등하게
- align-content
  - justify-content와 비슷하나 반대축 item 지정
  - `align-content: space-between`: 위와 아래는 딱 붙고 중간에 space들어감
  - `align-content: center`: 중간으로 item들 모임





## item

- order
  - 기본값은 0
  - 순서가 order에 맞춰 바뀜
  - `order: 1;`
- flex-grow
  - 안쓰면 원래크기 유지, 창이 작아지면 그에 맞춰 작아짐
  - flex-grow를 쓰면 container를 다 채울 수 있음
  - 기본값은 0
  - `flex-grow: 2;`: 나머지에 비해 2배
- flex-shrink
  - container가 점점 작아졌을 때 어떻게 행동하냐
  - 기본값은 0
  - `flex-shrink: 2;`: 줄어들 때 나머지에 비해 2배로 줄어듦
- flex-basis
  - itme들이 공간을 얼마나 차지해야하는지 세부적으로 명시
  - 기본값은 auto, grow나 shrink에 지정된 값으로 변형
  - grow나 shrink 쓰지않고 표시하면 커지든 작아지든 비율 유지
  - `flex-basis: 10%`
- align-self
  - item 별로 item들을 정렬
  - item 하나만 특별히 배치할 때 사용
  - `align-self: center;`



## 100% vs 100vh

- % : container가 들어있는 부모 높이의 100%
- vh : 부모에 상관없이 보이는 곳의 %를 쓰겠다



## Color tools

- 더 예쁜 색상 쓰고싶을 때 UI적으로 어떻게 보여질 수 있는지 보여줌
  - https://material.io/resources/color/#!/?view.left=0&view.right=0



## 참고사이트 소개

- [CSS Tricks for Flexbox]: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

- [MDN Float]: https://developer.mozilla.org/en-US/docs/Web/CSS/float

- [MDN Flexbox]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox



