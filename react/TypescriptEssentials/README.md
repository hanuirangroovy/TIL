# TypescriptEssentials

## Ch1. TypeScript

### 01. TypeScript란 무엇인가?

- Typescript란?

  - Programming Language 언어
  - Compiled Language. Transpile이라는 용어를 사용하기도 함.
  - 타입을 적용해서 자바스크립트를 확장시킴
  - 에러를 잡거나 고치는 시간을 절약해줌
  - 어떤 자바스크립트 실행환경에서든 완전히 오픈소스임

- Compiled와 Interpreted 차이

  - |            Compiled             |          Interpreted           |
    | :-----------------------------: | :----------------------------: |
    |          컴파일이 필요          |          컴파일 필요X          |
    |         컴파일러가 필요         |        컴파일러가 필요X        |
    | 컴파일하는 시점O -> 컴파일 타임 |        컴파일하는 시점X        |
    |     컴파일된 결과물을 실행      |        코드 자체를 실행        |
    | 컴파일된 결과물을 실행하는 시점 | 코드를 실행하는 시점O = 런타임 |

### 02. TypeScript 설치 및 사용

- 자바스크립트 실행환경

  - Node.js - Chrome's V8 JavaScript Engine을 사용하여, 자바스크립트를 해석하고 OS 레벨에서의 API를 제공하는 서버사이드용 자바스크립트 런타임 환경

  - browser - HTML을 동적으로 만들기 위해 브라우저에서 자바스크립트를 해석하고, DOM을 제어할 수 있도록 하는 자바스크립트 런타임 환경

### 03. VS Code 설치 및 설정



## Ch2. Basic Types

### 01. TypeScript Types vs JavaScript Types

- |                TypeScript                |               JavaScript                |
  | :--------------------------------------: | :-------------------------------------: |
  | static Types (개발하는 중간에 타입 체크) | Dynamic Types(런타임 돌입 시 타입 체크) |

- 프로그램이 유용하려면, 가장 간단한 데이터 단위로 작업 할 수 있어야 한다.

- TypeScript에서 JavaScript에서 기대하는 것과 동일한 타입을 지원하며 돕기위해 추가적인 열거 타입이 제공됨.

- TypeScript에서 프로그램 작성을 위해 기본 제공하는 데이터 타입

  - ECMAScript 표준에 따른 기본 자료형은 6가지
    - Boolean
    - Number
    - String
    - Null
    - Undefined
    - Symbol
    - Array: object 형
  - 프로그래밍을 도울 몇 가지 타입이 더 제공됨
    - Any, Void, Never, Unknown
    - Enum
    - Tuple: object 형

### 02. Primitive Types

- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형

- 프리미티브 형의 내장 함수를 사용 가능한 것은 자바스크립트 처리 방식 덕분

- boolean, number, string, symbol, null, undefined

- literal 값으로 Primitive 타입의 서브 타입을 나타낼 수 있음

- 래퍼 객체로 만들 수 있음

  - ```
    new Boolean(false); // type of new Boolean(false) : 'object'
    new String('world') // type of new String('world') : 'object'
    ```

### 03. boolean

### 04. number

- JavaScript와 같이, TypeScript의 모든 숫자는 부동 소수점 값
- TypeScript는 16진수 및 10진수 리터럴 외에도 ECMAScript 2015에 도입된 2진수 및 8진수를 지원함
- NaN
- 1_000_000과 같은 표기 가능

### 05.string

- 다른 언어에서와 마찬가지로 텍스트 형식을 참조하기 위해 'string' 형식을 사용
- JavaScript와 마찬가지로 TypeScript는 문자열 데이터를 둘러싸기 위해 큰 따옴표나, 작은 따옴표 사용
- Template String
  - 행에 걸쳐 있거나, 표현시을 넣을 수 있는 문자열
  - backtick 기호에 둘러쌓여 있음
  - 포함된 표현식은 '${expr}'와 같은 형태로 사용

### 06. symbol

- ECMAScript 2015의 Symbol
- new Symbol로 사용할 수 없음
- Symbol을 함수로 사용해서 symbol타입을 만들어낼 수 있음
- 프리미티브 타입의 값을 담아서 사용
- 고유하고 수정불가능한 값으로 만듦
- 주로 접근을 제어하는데 쓰는 경우가 많음

### 07. null & undefined

- 소문자로 존재
- 설정을 하지 않으면 모든 타입의 서브타입으로 존재
- 컴파일 옵션에서 '--strictNullChecks' 사용하면, null과 undefined는 void 나 자기 자신들에게만 할당할 수 있음
- null과 undefined를 할당할 수 있게 하려면 union type을 이용해야함.
- null
  - null이라는 값으로 할당된 것
  - 무언가 있는데 사용할 준비가 덜 된 상태
  - null 타입은 null 값만 가질 수 있음
  - 런타임에서 typeof 연산자를 이용해서 알아내면 object임

### 08. object

- primitivee type이 아닌 것을 나타내고 싶을 때 사용하는 타입
- not number, string, boolean, bigint, symbol, null, undefined

### 09. Array

- 자바스크립트에서 객체
- 공통 요소일 수 밖에 없는 모임

### 10. Tuple

- 길이가 정해져있고 타입이 정확하거나 다를 수 있는 자료형

### 11. any

- 어떤 타입이어도 상관없는 타입
- 최대한 쓰지 않는 게 핵심
- 컴파일 타이에 타입 체크가 정상적으로 이뤄지지 않기 때문
- 컴파일 옵션 중에는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있음
- any는 계속해서 개체를 통해 전파됨
- 모든 편의는 타입 안전성을 잃는 대가로 옴. 

### 12.unknown

- 응용 프로그램을 작성할 떄 모르는 변수의 타입을 묘사해야할 수도 있음
- 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하므로 unknown타입을 제공함.
- any와 짝으로 any보다 Type-safe한 타입
  - any와 같이 아무거나 할당 가능
  - 컴파일러가 타입을 추론할 수 있게 타입의 유형을 좁히거나 타입을 확정해주지 않으면 다른 곳에 할당할 수 없고 사용할 수 없음
- unknown 타입을 사용하면 runtime error를 줄일수 있음
  - 사용 전에 데이터의 일부 유형의 감사를 수행해야 함을 알리는 API에 사용할 수 있음

### 13. never

- 모든 타입의 subtype, 모든 타입에 할당 할 수 있음
- never에는 그 어떤 것도 할당할 수 없음
- any 조차도 never에게 할당 할 수 없음
- 잘못된 타입을 넣는 실수를 막고자 할 때 사용

### 14. void

- 값은 없고 타입만 있어서 void 값을 쓸 수 없음
- 값을 가지지 않는 undefined를 return 하는 상태
