// 23.5 렉시컬 환경
// 렉시컬 환경: 식별자와 식별자에 바인딩된 값, 상위 스코프에 대한 참조를 기록하는 자료로 실행 컨텍스트를 구성하는 컴포넌트.
// 렉시컬 환경은 키와 값을 갖는 객체 형태의 스코프를 생성하여 식별자를 키로 등록하고 식별자에 바인딩된 값을 관리한다.
// 렉시컬 환경은 스코프를 구분하여 식별자를 등록하고 관리하는 저장소 역할을 하는 렉시컬 스코프의 실체

// 렉시컬 환경은 두 개의 컴포넌트로 구성된다.
// 1. 환경 레코드
// 스코프에 포함된 식별자를 등록하고 등록된 식별자에 바인딩된 값을 관리하는 저장소

// 2. 외부 렉시컬 환경에 대한 참조
// 외부 렉시컬 환경에 대한 참조는 상위 스코프를 가리킨다.
// 상위 스코프란 외부 렉시컬 환경, 즉 해당 실행 컨텍스트를 생성한 소스코드를 포함하는 상위 코드의 렉시컬 환경을 말한다.
// 외부 렉시컬 환경에 대한 참조를 통해 단방향 링크드 리스트인 스코프 체인을 구현한다.
