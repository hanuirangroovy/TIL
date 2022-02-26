# 3. 데이터타입, data types, let vs var, hoisting

[자바스크립트 기초 강의 3]: https://www.youtube.com/watch?v=OCCpGh4ujb8&amp;list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&amp;index=3



- main.js를 variable.js로 변경



## Variable

- rw (read/write)

- 변수 : 변경될 수 있는 값

  - let (added in ES6)

    - ```
      let name = 'ellie';   // let이라는 키워드를 이용해서 name이라는 변수를 선언. 선언함과 동시에 ellie라는 변수의 값을 할당 
      console.log(name);
      name = 'hello';   /다시 name이라는 변수에 hello라는 값 할당
      console.log(name);
      ```

    - ![variable_let](md-images/variable_let.PNG)

- let 전에는?

  - var (don't ever use this!)

    - ```
      console.log(age);
      age = 4;
      console.log(age);
      var age;
      ```

    - ![var](md-images/var.PNG)

    - var hoisting (move declaration from bottom to top) : 어디에 선언했나 상관없이 항상 제일 위로 선언을 끌어주는 것.

    - var has no block scope : block을 철저히 무시하는 아이

      - ```
        {
            age = 4;
            var age;
        }
        console.log(age);
        ```

      - ![var_hasnoblockscope](md-images/var_hasnoblockscope.PNG)

      - 아무리 저 깊은 곳에 블럭을 이용해서 변수를 선언해도 어디에서나 아무곳에서나 보일 수 있는 것

      - 어느정도 규모가 되면 선언하지도 않은 값들이 할당되어 오는 이상한 일들이 발생 

  - let과 비교

    - ```
      name = 4;
      let name;
      ```

    - ![let](md-images/let.PNG)





## Blook scope

- 코드를 {} 안에 작성. 이렇게 하면 블럭 밖에서는 블럭 안의 내용을 볼 수 없게 됨

  - ```
    {
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    }
    console.log(name);  -> 밖에서 접근하면 아무 값도 나오지 않음
    ```

- 반대로 블럭을 쓰지않고 file 안에 바로 정의해서 쓰는 정수들을 global scope이라고 부름

  - 어느곳에서나 접근 가능

  - ```
    let globalName = 'global name';
    {
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
    }
    console.log(name);
    console.log(globalName);
    ```

  - ![globalscope](md-images/globalscope.PNG)

  - 글로벌한 변수들은 application이 실행되는 순간부터 끝날 때까지 항상 메모리에 탑재되어 있기 때문에 최소한으로 쓰는게 좋음
  - 가능하다면 class, 함수, if, for 루프 필요한 부분에서만 정해서 쓰는 게 좋음



## Constant

- r (read only)

- 한 번 할당하면 값이 절대 바뀌지 않는 것
- 변수를 이용하면 변수가 메모리 어딘가에 할당된 박스를 가리키고 있어서 포인터를 이용해 값을 계속 바꿔나갈 수 있었으나 Constant는 가리키고 있는 포인터가 잠겨있어 값을 선언함과 동시에 할당한 뒤로는 절대 값을 변경할 수 없음
  - 값이 바뀔 수 있는 것 = Mutable
    - Mutable data type : let 키워드를 이용한 변수
  - 변경이 불가능한 = Immutable
    - Immutable data type : Constant
- favor immutable data type always for a few reasons
  - 보안상
    - 한 번 작성한 값을 다른 해커들이 이상한 코드를 삽입해서 값을 계속해서 변경해 나갈 수 있음. 이걸 방지.
  - thread safety
    - 어플리케이션이 실행되면 한 가지의 프로세스가 할당되고 그 프로세스 안에서는 다양한 thread가 동시에 돌아가면서 어플리케이션을 조금더 효율적으로 빠르게 동작할 수 있도록 도와주는데 이 다양한 thread들이 동시에 변수에 접근해서 값을 변경할 수 있음. 이건 위험. 그렇기에 가능하면 값이 변경되지 않는 걸 사용하는 게 좋음
  - reduce human mistakes





## Variable types

- primitive type, single item : 더 이상 작은 단위로 나눠질 수 없는 한 가지 아이템

  - number, string, boolean, null, undefined, symbol
  - value 값 자체가 메모리에 저장

- object type : single item들을 여러 개 묶어서 한 단위, 박스로 관리할 수 있게 해주는 것

  - 너무 커서 메모리에 한 번에 다 올라갈 수 없음. 
  - object를 가리키는 reference. 이 reference를 통해 실제 object가 담긴 메모리를 가리킴.

- function

  - first-class function 지원이 돼 : 이 프로그래밍 언어에서는 function도 다른 데이터 타입처럼 변수에 할당이 가능하고 함수에 parameter 인자로도 전달이 되고 함수에 return type으로도 function을 return할 수 있는 게 가능하다

- data types for number 

  - C언어 (low level)

    - ```
      int main() {
      	short a = 12;       // 2bytes
      	int a = 12;         // 4bytes
      	long b = 1234;      // 8bytes
      	float d = 1.2f;     // 4bytes
      	double e = 8.2;     // 16bytes
      	return 0;
      }
      ```

    - short, int, long : 정수 할당

    - float, double : 소수점 할당

  - Java

    - ```
      class main {
      	public static void main(String[] args) {
      	byte a = 12;
      	short b = 12;
      	long c = 12; 
      	int d = 12;
      	float e = 1.2f;
      	double f = 1.2;
      	}
      }
      ```

  - Java script

    - ```
      let a = 12;
      let b = 1.2;
      ```

  - TypeScript

    - ```
      let a: number = 12;
      let b: number = 1.2;
      ```

- ```
  const count = 17;  //integer
  const size = 17.1; //decimal number
  console.log(`value: ${count}, type: ${typeof count}`);
  console.log(`value: ${size}, type: ${typeof size}`);
  ```

  - ​	![variabletypes](md-images/variabletypes.PNG)

- number - special numeric values : infinity, -infinity, NaN

  - ```
    const infinity = 1 / 0;
    const negativeInfinity = -1 / 0;
    const nAn = 'not a number' / 2;
    console.log(infinity);
    console.log(negativeInfinity);
    console.log(nAn);
    ```

  - ![infinity](md-images/infinity.PNG)

  - 다양한 계산을 해야할 때 나누고자 하는 값이 0인지 숫자인지 아닌지 확인하지 않고 연산을 하게되면 숫자가 아닌 infinity나 nAn를 받을 수 있음. 사용자에게 에러발생할 수 있기에 연산할 때 값이 valid한 값인지 확인하고 연산하는 게 중요

- bigInt : 끝에 n 붙이면 bigInt로 인지

  - ```
    const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2**53
    conseole.log(`value: ${bigInt}, type: ${typeof bigInt}`);
    Number.MAX_SAFE_INTEGER;
    ```

  - ![bigInt](md-images/bigInt.PNG)

- string

  - ```
    const char = 'c';
    const brendan = 'brendan';
    const greeting = 'hello' + brendan;
    console.log(`value: ${greeting}, type: ${typeof greeting}`);
    const helloBob = `hi ${brendan}!`; //template literals (string)
    console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
    ```

  - ![string](md-images/string.PNG)

- boolean

  - false : 0, null, undefined, NaN, ''

  - true : any other value

  - ```
    const canRead = true;
    const test = 3 < 1; //false
    console.log(`value: ${canRead} test: ${typeof canRead}`);
    console.log(`value: ${test}, type: ${typeof test}`);
    ```

  - ![boolean](md-images/boolean.PNG)

- null, undefined

  - ```
    //null
    let nothing = null;
    console.log(`value: ${nothing}, type: ${typeof nothing}`);
    
    
    //undefined
    let x;
    console.log(`value: ${x}, type:${typeof x}`);
    ```

  - ![null](md-images/null.PNG)

- symbol

  - 맵이나 다른 자료구조에서 고유한 식별자가 필요하거나 동시에 다발적으로 일어날 수 있는 코드에서 우선순위를 주고싶을 때 고유한 식별자가 필요할 때 쓰여짐

  - string은 다른 모듈이나 다른 파일에서 동일한 string을 썼을 때 동일한 식별자로 간주됨. 반대로 symbol같은 경우는 다른경우로 간주

  - symbol은 동일한 string을 작성했어도 다른 symbol로 만들어짐.

  - 그렇기에 주어진 string에 상관없이 고유한 식별자 만들 때 사용

  - Symbol.for('id')하면 주어진 string에 맞는 symbol을 만들어 줌 

  - ```
    const symbol1 = Symbol('id');
    const symbol2 = Symbol('id');
    console.log(symbol1 === symbol2);
    const gSymbol1 = Symbol.for('id');
    const gSymbol2 = Symbol.for('id');
    console.log(gSymbol1 === gSymbol2);  //true
    ```

  - ![symbol](md-images/symbol.PNG)

  - symbol을 바로 출력하게 되면 error

    - ![error](md-images/error.PNG)

    - 항상 .description을 이용해 string으로 변환해서 출력해야 함

      - ```
        //console.log(`value: ${symbol1}, type: ${typeof symbol1}`);
        console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)
        ```

      - ![symbol1](md-images/symbol1.PNG)

- Dynamic typing

  - 선언할 때 어떤 타입인지 선언하지 않고 runtime 프로그램이 동작할 때 할당된 값에 따라 타입이 변경될 수 있다는 것

  - 내가 좋은 아이디어가 있어 빠르게 프로토타입을 하고싶을 때는 유연하게 쓸 수 있는 언어

  - 다수의 엔지니어들이 어느정도 규모가 있는 프로젝트를 만들 때 이런 dynamic typing은 발등에 불이 떨어질 수 있음.

  - ```
    let text = 'hello';
    console.log(text.charAt(0)); //h
    console.log(`value:${text}, type: ${typeof text}`);
    text = 1;
    console.log(`value:${text}, type: ${typeof text}`);
    text = '7' + 5;
    console.log(`value:${text}, type: ${typeof text}`);
    text = '8' / '2';
    console.log(`value:${text}, type: ${typeof text}`);
    console.log(text.charAt(0));
    ```

  - ![dynamic](md-images/dynamic.PNG)

  - 그래서 TypeScript가 나오게 됨

- object

  - 박스 형태

  - ```
    //object, real-life object, data structure
    const ellie = {name:'ellie', age:20};
    ellie.age = 21;
    ```

