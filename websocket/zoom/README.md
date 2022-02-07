# Noom

[노마드코더_줌 클론코딩]: https://nomadcoders.co/noom

Zoom Clone using NodeJS, WebRTC and Websockets.



## 목차

1. INTRODUCTION
   1. Server Setup
   2. Fronted Setup





## INTRODUCTION

### Server Setup

1. ```mkdir zoom```
2. ```cd zoom```
3. ```npm init -y```
4. ```code .```
5. package.jsno에서 scripts, main 삭제, license: ```MIT```로 변경, descriptopm:```"Zoom Clone using NodeJS, WebRTC and Websockets"```로 변경
6. README.md 추가
7. ```npm i nodemon -D``` : nodemon 설치
8. babel.config.json 파일 만들기

9. nodemon.json 파일 만들기

10. src 폴더 만들고 안에 server.js(서버가 될) 파일 만들기

    - ```
      #server.js
      
      console.log("hello");
      ```

11. 터미널에 ```npm i @babel/core @babel/cli @babel/node -D``` 작성

12. ```touch .gitignore```

    - ```
      #.gitignore
      
      /node_modules
      ```

13. ```
    #nodemon.json
    
    {
    	"exec": "babel-node src/server.js"
    }
    ```

    - nodemon에는 "exec"라는 key 하나만 있는데  src/server.js에 대해 babel-node 명령문을 실행시키는 것

14. babel.config.json에서 "preset" 설정

    - ```
      #babel.config.json
      
      {
          "presets": ["@babel/preset-env"]
      }
      ```

15. ```npm i @babel/preset-env -D```

16. ```
    #package.jsno
      
      "scripts": {
        "dev": "nodemon"
      },
    ```

    - dev는 nodemon 호출
    - nodemon이 호출되면 nodemon이 nodemon.json을 살펴보고 거기있는 코드를 실행

17. ```npm i express```

18. ```npm i pug```

19. ```
    #server.js
    
    import express from "express";
    
    const app = express();
    
    console.log("hello");
    
    app.listen(3000);
    ```

20. ```npm run dev```



- Error

  - [nodemon] app crashed -waiting for file changes before starting...

    - 해결책1 : g옵션 부여

      - ```$ npm uninstall @babel/core @babel/cli @babel/node -D```
      - ```$ npm i @babel/core @babel/cli @babel/node -g```

    - 해결책2 : 바벨 설정 변경

      - ```
        #babel.config.json
        
        {
            "presets": ["@babel/env"]
        }
        ```

        

### Fronted Setup

1. src>public>js>app.js 생성

2. pug 페이지들을 렌더하기 위해 pug 설정

   - 4번 코드 참조

3. src 안에 views라는 새로운 폴더 생성, views 파일 안에 ```home.pug``` 생성

   - html:5
   - title 을 Noom 으로 바꾸고 h1으로 "It works~!" 해주기

4.  views 디렉토리 입력

   - views가 src 안에 있으니 아래로 써줌

   - ```
     #server.js
     
     import express from "express";
     
     const app = express();
     
     app.set("view engine","pug")
     app.set("views", __dirname + "/src/views");
     
     const handleListen = () => console.log(`Listening on http://localhost:3000`);
     
     app.listen(3000);
     ```

5. route 만들기

   - home으로 가면 request, response를 받고 res.render을 해서 home을 렌더

   - express로 할 일은 views를 설정해주고 render해주는 것

   - 나머지는 websocket에서 실시간으로 일어남

   - ```
     import express from "express";
     import path from 'path';
     
     const __dirname = path.resolve();
     const app = express();
     
     app.set("view engine","pug");
     app.set("views", __dirname + "/src/views");
     
     app.get("/", (req, res) => res.render("home"));
     const handleListen = () => console.log(`Listening on http://localhost:3000`);
     app.listen(3000,handleListen);
     ```

6. 여기까지 페이지를 render하고 있고 이제 home에 script를 추가해주면 됨

   - ```
     #home.pug
     
     doctype html
     html(lang="en")
         head
             meta(charset="UTF-8")
             meta(http-equiv="X-UA-Compatible", content="IE=edge")
             meta(name="viewport", content="width=device-width, initial-scale=1.0")
             title Noom
         body
             h1 It works~! 
             script(src="/public/js/app.js")
     ```

   - http://localhost:3000/public/js/app.js 들어가보면 url이 작동하지 않아 ```Cannot GET /public/js/app.js``` 뜬 걸 볼 수 있음. -> static 작업 해줘야함

7. express로 이동해 다음과 같이 작성

   - 유저가 /public으로 가게되면 __dirname + "/public" 폴더를 보여주게 함



- Error

  - ReferenceError: __dirname is not defined in ES module scope

    - server.js 상단에 추가

    - ```
      import path from 'path';
      
      const __dirname = path.resolve();
      ```

      



