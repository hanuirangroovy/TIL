# JSON 개념 정리와 활용방법 및 유용한 사이트 공유 (JavaScript ES6)

[자바스크립트 기초 강의 10]: https://www.youtube.com/watch?v=FN_D4Ihs3LE



- HTTP (Hypertext Transfer Protocal)
  - browser 위에서 동작하고 있는 웹사이트나 웹어플리케이션과 같은 client들이 어떻게 server와 통신할 수 있는 지 정의한 것
  - 어떻게 Hypertext를 서로 주고받을 수 있는지를 규약한 protocal의 하나
  - client가 server에게 데이터를 request할 수 있고 server는 client가 요청한 것에 따라 그에 맞는 response를 client에게 보냄
  - Hypertext - 웹사이트에서 이용되어지고 있는Hyper link들만 이야기하는 것이 아니라 전반적으로 쓰여지고 있는 resource를 문서나 Image file들 등을 다 포함해서 말함

- HTTP를 이용해서 server에게 데이터를 요청해서 받아올 수 있는 방법
  - AJAX
    - Asynchronous JavaScript And XML
    - 웹페이지에서 동적으로 서버에게 데이터를 주고받을 수 았는 기술
    - 대표적인 예 - XHR (XMLHttpRequest)
      - XHR object는 browser API에서 제공하는 object 중 하나로 이 object를 이용하면 간단하게 서버에게 데이터를 요청하고 받아올 수 있음
      - 최근 browser API에 추가된 fetch() API를 이용하면 간편하게 데이터를 주고받을 수 있음
      - fetch는 internet explorer에서 지원이 되지 않기 때문에 이 점을 유의해서 사용해야함
- XML
  - html과 같은 markup 언어 중 하나
  - 태그들을 이용해서 데이터를 나타냄
- 서버와 데이터를 주고받을 때는 XML만 가능한가?
  - 서버와 데이터를 주고받을 때는 XML뿐만 아니라 다양한 파일 포맷을 전달받을 수 있음
  - JSON을 요즘 많이씀
- XML이라는 이름이 지워진 이유
  - AJAX와 XHR이 활발히 개발되어지고 있을 당시에 microsoft사에 있는 outlook을 만드는 개발팀이 활발히 참여했는데 이때 outlook은 서버와 클라이언트 데이터 전송을 할 때 XML을 사용했음. 그래서 XML을 HttpRequest 앞에 붙여서 개발하게 됨.