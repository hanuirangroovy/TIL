# MVC 패턴

- Controller가 만들어질 때는 기본적으로 Index라는 이름의 Action method가 자동으로 생성
- 뷰 추가 가능

- Validate Anti Fogery Token attributes - 위조방지토큰을 통해 View로부터 받은 Post data가 유효한지 검증
  - Post로 지정된 action method에서 지정해줘야함.


- 순서
  1. 사용자는 로그인 정보 입력 후 처리를 요청
  2. Controller는 ViewModel을 입력받아 로그인 처리한 후 View에 ViewModel 전달
     - ViewModel은 이동수단의 역할
     - View는 ViewModel을 통해 화면을 구성
- 정리
  - End User(최종사용자) -> 컨트롤러에게 요청
  - Controller(컨트롤러) -> 최종사용자에게 응답
  - View(뷰) -> 응답결과를 화면으로 출력
  - Model(뷰모델) -> 최종사용자로부터 컨트롤러를 거쳐 뷰까지 데이터 이동
