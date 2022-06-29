// 21.1 자바스크립트 객체의 분류

// 표준 빌트인 객체: ECMAScript 사양에 정의된 객체. 애플리케이션 전역의 공통 기능 제공. 전역 객체의 프로퍼티로서 제공. 별도의 선언 없이 전역 변수처럼 언제나 참조할 수 있음.

// 호스트 객체: ECMAScript 사양에 정의되어 있지 않지만 자바스크립트 실행환경에서 추가로 제공하는 객체
// 브라우저 환경에서는 DOM, BOM, Canvas, XHLHttpRequest, fetch, requestAnimationFrame, SVG, Web Strage, Web Component, Web Worker와 같은 클라이언트 사이드 Web API를 호트스 객체로 제공
// Node.js환경에서는 Node.js 고유의 API를 호스트 객체로 제공

// 사용자 정의 객체: 표준 빌트인 객체와 호스트 객체처럼 기본 제공되는 객체가 아닌 사용자가 직접 정의한 객체
