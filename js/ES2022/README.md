# ES2022

[Draft ECMA-262 / July 7, 2022]: https://tc39.es/ecma262/
[자바스크립트 미친 신기능 4개]: https://www.youtube.com/watch?v=m-R7s7fnwvU



## 자바스크립트 미친 신기능 4개

### TOP LEVEL AWAIT

- 이전에는 'await'를 사용하려면 'async' 함수 내에서 해야 했음

```
(async function () {
  await startServer();
})();
```

- ES2022에서는 그런 규칙이 사라져 'async' 함수 없이 await를 모듈에서 사용할 수 있음

```
await startServer();
```



### ERROR CAUSE

- 활용하면 오류의 원인을 설명하여 더 나은 오류 메시지를 만들 수 있음
- 이전에는 오류를 만들 때 오류 메시지를 작성하는 것밖에 할 수 없었음

```
new Error("Can't save comment");
```

- 이제는 무엇이 오류를 발생시켰는지 설명할 수 있어 정확히 무엇이 잘못되었는지 구체적으로 알 수 있음

```
new Error("Can't save comment", { cause: "Not allowed." });
```

- 아래처럼 동일한 오류 메시지를 사용하지만 다른 원인을 작성할 수 있음

```
new Error("Can't save comment", { cause: "Not allowed." });
new Error("Can't save comment", { cause: "Post not found." });
new Error("Can't save comment", { cause: "Database is full." });
```

- `.message`를 할 수 있듯이 이제 `.cause`에 액세스 할 수 있음

```
const err = new Error("Can't save comment", { cause: "Not allowed." });

err.message; // Can't save comment
err.cause; // Not allowed.
```



### .at()

- 배열의 모든 인덱스에 액세스할 수 있음

```
const food = ["🍕", "🍔", "🍟", "🌭"];
food.at(2); // 🍟
```

- 전에도 대괄호를 사용하면 가능했음

```
const food = ["🍕", "🍔", "🍟", "🌭"];
food[2]; // 🍟
```

- 대괄호와의 차이점은 뒤로 검색할 수 있다는 것. 배열의 끝부터 시작까지 뒤쪽으로 검색됨

```
const food = ["🍕", "🍔", "🍟", "🌭"];
food.at(-1); // 🌭
```



### CLASS FIELDS

- 이전에 불가능했던 Private 메서드 및 속성을 가질 수 있음
- 또한, 'static' 메서드를 사용할 수 있음
- 속성을 초기화하기 위해 'constructor'를 사용할 필요도 없음
- Private 메서드나 속성을 만들려면 이름 앞에 #기호를 사용하면 됨
- 이전에는 Private 속성을 만들 수 없었고 속성을 초기화하기위해 constructor 를 사용해야 했음

```
class Message {
  constructor() {
    this.text = "Hi";
  }
}
```

- Private 메서드. 부르려고 하면 작동이 안됨

```
class Message {
  #destruct() {
    console.log("booooom!");
  }
}

const btn = new Message();
btn.#destruct();
```

- Private text 속성을 가진 메세지를 만들고 있으며 constructor를 사용하지 않고 있음 (속성과 동일)

```
class Message {
  #text = "Hi";
}
```

- Static 메서드도 만들 수 있음

```
// 이전
class Message {
  // body
}
Message.build(){
  // body
}

// 지금
class Message {
  static build() {
    // body
  }
}

// 원하면 비공개로 할 수도 있음
class Message {
  static #build() {
    // body
  }
}

```



