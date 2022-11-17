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



## Ch 3. Type System

### 01. 작성자와 사용자의 관접으로 코드 바라보기

- 타입 시스템
  - 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템
  - 컴파일러가 자동으로 타입을 추론하는 시스템
- 타입스크립트의 타입 시스템
  - 타입을 명시적으로 지정할 수 있다.
  - 타입을 명시적으로 지정하지 않으면, 타입스크립트 컴파일러가 자동으로 타입을 추론

- 타입이란 해당 변수가 할 수 있는 일을 결정합니다.

  - ```
    // JavaScript
    // f1이라는 함수의 body 에서는 a를 사용할 것입니다.
    // a가 할 수 있는 일은 a의 타입이 결정합니다.
    
    function f1(a){
    	return a;
    }
    ```

- 함수 사용법에 대한 오해를 야기하는 자바스크립트

  - ```
    // JavaScript
    
    // (f2 실행의 결과가 NaN을 의도한 것이 아니라면)
    // 이 함수의 작성자는 매개변수 a가 number 타입이라는 가정으로 함수를 작정했습니다.
    
    function f2(a){
    	return a * 38;
    }
    
    // 사용자는 사용법을 숙지하지 않은 채, 문자열을 사용하여 함수를 실행했습니다.
    console.log(f2(10)); // 380
    console.log(f2('Mark')); // NaN
    ```

- 타입스크립트의 추론에 의지하는 경우

  - ``` 
    // 타입스크립트 코드지만,
    // a의 타입을 명시적으로 지정하지 않은 경우이기 때문에 a는 any로 추론됩니다.
    // 함수의 리턴 타입은 number로 추론됩니다. (NaN도 number의 하나입니다.)
    
    function f3(a){
    	return a*38;
    }
    // 사용자는 a가 any이기 때문에, 사용법에 맞게 문자열을 사용하여 함수를 실행했습니다.
    console.log(f3(10)); // 380
    console.log(f3('Mark')+5); // NaN
    ```

- nolmplicitAny옵션을 켜면 타입을 명시적으로 지정하지 않은 경우, 타입스크립트가 추론 중 'any'라고 판단하게 되면, 컴파일 에러를 발생시켜 명시적으로 지정하도록 유도한다. 

- nolmplicitAny에 의한 방어

  - ```
    // error TS7006: Parameter 'a' implicitly has an 'any' type.
    
    function f3(a){
    	return a*38;
    }
    
    // 사용자의 코드를 실행할 수 없습니다. 컴파일이 정상적으로 마무리 될 수 있도록 수정해야 합니다.
    console.log(f3(10));
    console.log(f3('Mark')+5);
    ```

- number 타입으로 추론된 리턴 타입

  - ```
    // 매개변수의 타입은 명시적으로 지정했습니다.
    // 명시적으로 지정하지 않은 함수의 리턴 타입은 number로 추론됩니다.
    
    function f4(a:number){
    	if (a>0){
    		return a*38;
    	}
    }
    
    // 사용자는 사용법에 맞게 숫자형을 사용하여 함수를 실행했습니다.
    // 해당 함수의 리턴 타입은 number이기 때문에, 타입에 따르면 이어진 연산을 바로 할 수 있습니다.
    // 하지만 실제 undefined + 5가 실행되어 NaN이 출력됩니다.
    
    console.log(f4(5)); // 190
    console.log(f4(-5) + 5); // NaN
    ```

- strictNullChecks 옵션을 켜면 모든 타입에 자동으로 포함되어 있는 'null'과 'undefined'를 제거해줍니다.

- number|undefined 타입으로 추론된 리턴 타입

  - ```
    function f4(a:number){
    	if (a>0){
    		return a*38;
    	}
    }
    
    // 사용자는 사용자에 맞게 숫자형을 사용하여 함수를 실행했습니다.
    // 해당 함수의 리턴 타입은 number|undefined이기 때문에,
    // 타입에 따르면 이어진 연산을 바로 할 수 없습니다.
    // 컴파일 에러를 고쳐야하기 때문에 사용자와 작성자가 의논을 해야합니다.
    
    console.log(f4(5));
    console.log(f4(-5)+5); // error TS2532: Object is possibly 'undefined.'
    ```

- 명시적으로 리턴 타입을 지정해야할까?

  - ```
    // 매개변수의 타입과 함수의 리턴 타입을 명시적으로 지정했습니다.
    // 실제 함수 구현부의 리턴 타입과 명시적으로 지정한 타입이 일치하지 않아 컴파일 에러가 발생합니다.
    
    // error TS2366: Function lacks ending return statement and return type does not include...
    function f5(a: number): number {
    	if (a>0){
    		return a*38;
    	}
    }
    ```

- nolmplicitReturns 옵션을 켜면 함수 내에서 모든 코드가 값을 리턴하지 않으면, 컴파일 에러를 발생시킨다.

- 모든 코드에서 리턴을 직접해야한다.

  - ```
    // if가 아닌 경우 return을 직접 하지 않고 코드가 종료된다.
    // error TS7030: Not all code paths return a value.
    function f5(a:number){
    	if (a>0){
    		return a*38;
    	}
    }
    ```

- 매개변수에 object가 들어오는 경우

  - ```
    // JavaScript
    
    function f6(a){
    	return `이름은 ${a.name}이고, 연령대는 ${
    		Math.floor(a.age/10)*10
    	}대 입니다.`;
    }
    
    console.log(f6({ name: 'Mark', age: 38 })); // 이름은 Mark이고, 연령대는 30대입니다.
    console.log(f6('Mark')); // 이름은 undefined이고, 연령대는 NaN대 입니다.
    ```

- object literal type

  - ```
    function f7(a: { name: string; age: number }): string {
    	return `이름은 ${a.name}이고, 연령대는 ${
    		Math.floor(a.age/10)*10
    	}대 입니다.`;
    }
    
    console.log(f7({ name: 'Mark', age: 38 })); // 이름은 Mark이고, 연령대는 30대입니다.
    console.log(f7('Mark')); // error TS2345: Argument of type 'string' is not assignable to parameter of type '{ name: string; age: number; }'.
    ```

- 나만의 타입을 만드는 방법

  - ```
    interface PersonInterface {
    	name: string;
    	age: number;
    }
    
    type PersonTypeAlias = {
    	name: string;
    	age: number;
    };
    
    function f8(a: PersonInterface): string{
    	return `이름은 ${a.name}이고, 연령대는 ${
    		Math.floor(a.age/10)*10
    	}대 입니다.`;
    }
    
    console.log(f8({ name: 'Mark', age: 38 })); // 이름은 Mark이고, 연령대는 30대입니다.
    console.log(f8('Mark')); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'PersonInterface'.
    ```

### 02. Structural Type System vs Norminal Type System

- structural type system - 구조가 같으면, 같은 타입이다.

  - ```
    interface IPerson {
    	name: string;
    	age: number;
    	speak(): string;
    }
    
    type PersonType = {
    	name: string;
    	age: number;
    	speak(): string;
    };
    
    let personInterface: IPerson = {} as any;
    let personType: PersonType = {} as any;
    
    personInterface = personType;
    personType = personInterface;
    ```

- nominal type system - 구조가 같아도 이름이 다르면, 다른 타입이다.

  - ```
    type PersonID = string & { readonly brand: unique symbol };
    function PersonID(id: string):PersonID{
    	return id as PersonID;
    }
    
    function getPersonById(id:PersonID){}
    getPersonById(PersonID('id-aaaaaa'));
    getPersonById('id-aaaaaa'); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'PersonID'. Type 'string' is not assignable to type '{readonly brand: unique symbol;}'.
    ```

    

### 03. 타입 호환성 (Type Compatibility)

- 서브 타입(1)

  - ```
    // sub1 타입은 sup1 타입의 서브 타입이다.
    let sub1: 1=1;
    let sup1: number = sub1;
    sub1 = sup1; // error: Type 'number' is not assignable to type '1'.
    
    // sub2 타입은 sup2 타입의 서브 타입이다.
    let sub2: number[] = [1];
    let sup2: object = sub2;
    sub2 = sup2; // error! Type '{}' is missing the following properties from type 'number[]': length, pop, push, concat, and 16 more.
    
    // sub3 타입은 sup33 타입의 서브 타입이다.
    let sub3: [number, number] = [1,2];
    let sup3: number[] = sub3;
    sub3 = sup3; // error! Type 'number[]' is not assignable to type '[number, number]'. Target requires 2 element(s) but source may have fewer.
    ```

- 서브 타입(2)

  - ```
    // sub4 타입은 sup4 타입의 서브 타입이다.
    let sub4: number = 1;
    let sup4: any = sub4;
    sub4 = sup4; // 예외상황
    
    // sub5 타입은 sup5 타입의 서브 타입이다.
    let sub5: never = 0 as never;
    let sup5: number = sub5;
    sub5 = sup5; // error! Type 'number' is not assignable to type 'never'.
    
    class Animal {}
    class Dog extends Animal {
    	eat() {}
    }
    
    // sub6 타입은 sup 타입의 서브 타입이다.
    let sub6: Dog = new Dog();
    let sup6: Animal = sub6;
    sub6 = sup6; // error! Property 'eat' is missing in type 'SubAnimal' but required in type 'SubDog'.
    ```

- 1. 같거나 서브 타입인 경우, 할당이 가능하다. -> 공변

  - ```
    // primitive type
    let sub7: string = '';
    let sup7: string | number = sub7;
    
    // object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
    elt sub8: {a: string; b: number} = {a:'', b:1};
    let sup8: {a: string |number; b: number} = sub8;
    
    // array - object와 마찬가지
    let sub9: Array<{a:string; b:number}> = [{a:'', b:1}];
    let sup9: Array<{a:string | number; b: number}> = sub8;
    ```

- 2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다. -> 반병

  - ```
    class Person {}
    class Developer extends Person{
    	coding() {}
    }
    class StartupDeveloper extends Developer{
    	buring() {}
    }
    function tellme(f: (d: Developer) => Developer) {}
    
    // Developer => Developer 에다가 Developer => Developer 를 할당하는 경우
    tellme(function dToD(d: Developer): Developer {
    	return new Developer();
    });
    
    // Developer => Developer에다가 Person => Developer를 할당하는 경우
    tellme(function pToD(d: Person): Developer {
    	return new Developer();
    });
    
    // Developer => Developer에다가 StartipDeveloper => Developer를 할당하는 경우 -> strictFunctionTypes 옵션을 켜면 에러 발생. Developer보다 하위 타입이기에
    tellme(function sToD(d: StartupDeveoper): Developer{
    	return new Developer();
    });
    ```

- strictFunctionTypes 옵션을 켜면 함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입인 경우가 아닌 경우, 에러를 통해 경고한다.



### 04. 타입 별칭 (Types Alias)

- 타입 별칭(별명)

  - Interface랑 비슷해 보입니다.
  - Primitive, Union Type, Tuple, Function
  - 기타 직접 작성해야하는 타입을 다른 이름을 지정할 수 있습니다.
  - 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것은 아닙니다.

- Aliasing Primitive

  - ```
    type MyStringType = string;
    
    const str = 'world';
    
    let myStr: MyStringType = 'hello';
    myStr = str;
    ```

- Aliasing Union Type

  - ```
    let person: string | number = 0;
    person = 'Mark';
    
    type StringOrNumber = string | number;
    
    let another: StringOrNumber = 0;
    another = 'Anna';
    
    /*
    1. 유니온 타입은 A도 가능하고 B도 가능한 타입
    2. 길게 쓰는 걸 짧게
    */
    ```

- Aliasing Function

  - ```
    type EatType = (food:string) => void;
    ```

    

## Ch4. TypeScirpt Complier

### 01. Compilation Context

- 타입스크립트 파일들을 그룹으로 만들고 그룹화된 타입스크립트 파일들을 자바스크립트로 변환하는데 이 과정에서 타입스크립트의 설정을 더하는 것.
- 어떤 파일을 컴파일 할 건지 어떤 파일을 컴파일하지 않을 건지나 타입스크립트를 자바스크립트로 변환해줄 때 어떤 타입스크립트 옵션을 사용할 지 등의 맥락을 일컫음
- 일종의 논리적인 grouping과 어떠한 방식을 사용할 건지가 적혀있는 맥락을 의미
- 이러한 부분은 tsconfig.jsonfile에 적혀있음



### 02. tsconfig schema

- http://json.schemastore.org/tsconfig - tsconfig.json 파일의 전체적인 schema를 알아볼 수 있음
- 최상위 프로퍼티
  - compileOnSave
  - extends
  - compileOptions - 어떤 설정으로 컴파일 할 건지 여러가지 맥락으로 들어있음
  - files
  - include
  - exclude
  - references
- files, include, exclude 세 개를 묶어서 어떤 파일을 컴파일할건지 결정
- 실습
  - `mkdir compilation-context`
  - `cd compilation-context`
  - ` npm init -y`
  - `npm i typescript -D`
  - `npx tsc --init`
  - `cat tsconfig.json`
