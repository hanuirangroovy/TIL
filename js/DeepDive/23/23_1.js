// 23.1 소스코드의 타입

// 전역 코드: 전역에 존재하는 소스코드. 전역에 정의된 함수, 클래스 등의 내부 코드는  포합되지 않는다.
// 전역 변수를 관리하기 위해 최상위 스코프인 전역 스코프를 생성해야 한다.
// var 키워드로 선언된 전역 변수와 함수 선언문으로 정의된 전역 함수를 전역 객체의 프로퍼티와 메서드로 바이닝하고 참조하기 위해 전역 객체와 연결되어야 한다.
// 이를 위해 전역 코드가 평가되면 전역 실행 컨텍스트가 생성된다.

// 함수 코드: 함수 내부에 존재하는 소스코드. 함수 내부에 중첩된 함수, 클래스 등의 내부 코드는 포함하지 않는다.
// 지역 스코프를 생성하고 지역 변수, 매개변수, arguments 객체를 관리해야 한다.
// 생성한 지역 스코프를 전역 스코프에서 시작하는 스코프 체인의 일원으로 연결해야 한다.
// 이를 위해 함수 코드가 평가되면 함수 실행 컨텍스트가 생성된다.

// eval 코드: 빌트인 전역 함수인 eval 함수에 인수로 전달되어 실행되는 소스코드
// strict mode에서 자신만의 독자적인 스코프를 생성한다.
// 이를 위해 eval 코드가 평가되면 eval 실행 컨텍스트가 생성된다.

// 모듈 코드: 모듈 내부에 존재하는 소스코드. 모듈 내부의 함수, 클래스 등의 내부 코드는 포함되지 않는다.
// 모듈별로 독립적인 모듈 스코프를 생성한다.
// 이를 위해 모듈 코드가 평가되면 모듈 실행 컨텍스트가 생성된다.
