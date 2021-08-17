# web



## HTML : Hyper Text Markup Language

- Hyper : 텍스트 등의 정보가 동일 선상에 있는 것이 아니라 다중으로 연결되어 있는 상태

- Hyper Text : 참조(하이퍼링크)를 통해 사용자가 한 문서에서 다른문서로 즉시 접근할 수 있는 텍스트
- Markup language : 태그 등을 이용하여 문서나 데이터의 구조를 명시하는 언어
  - 프로그래밍 언어와는 다르게 단순하게 데이터를 표현
  - ex) HTML, Markdown



## HTML 기본구조

- HTML : 웹 페이지를 작성하기 위한(구조를 잡기 위한) 언어, 웹 컨텐츠의 의미와 구조를 정의

- html 요소 : HTML 문서의 최상위 요소. 문서의 root. head와 body 부분으로 구분

- head 요소 : 문서 제목, 문자 코드(인코딩)와 같이 해당 문서 정보를 담고 있으며, 브라우저에 나타나지 x

  ​					CSS 선언 혹은 외부 로딩 파일 지정 등도 작성.

- body 요소 : 브라우저 화면에 나타나는 정보로 실제 내용에 해당.



> 메타 데이터를 표현하는 새로운 규약, Open Graph Protocol
>
> -  HTML 문서의 메타 데이터를 통해 문서의 정보를 전달
> - 페이스북에서 만들어졌으며, 메타정보에 해당하는 제목, 설명 등을 쓸 수 있도록 정의



> DOM(Document Object Model) 트리
>
> - DOM은 문서의 구조화된 표현을 제공하며, 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여 그들이 문서 구조, 스타일 내용 등을 변경할 수 있게 도움.
> - DOM은 동일한 문서를 표현하고, 저장하고, 조작하는 방법을 제공.
> - Web Page의 객체 지향 표현.



- 요소

  - < h1 > contents < /h1 > 
    
    HTML의 요소는 태그와 내용(contents)로 구성되어 있다. 
    
  - HTML 요소는 시작 태그와 종료 태그 그리고 태그 사이에 위치한 내용으로 구성.

  - 태그는 컨텐츠를 감싸는 것으로 그 정보의 성격과 의미를 정의

  - 내용이 없는 태그들 : br, hr, img, input, link, meta

  - 요소는 중첩될 수 있음

    - 요소의 중첩을 통해 하나의 문서를 구조화
    - 여는 태그와 닫는 태그의 쌍을 잘 확인해야함
    - 오류를 반환하는 것이 아닌 그냥 레이아웃이 깨진 사태로 출력되기 때문에, 디버깅이 힘들어 질 수 있음.

- 속성
  - <a href="https://google.com"></a>
  - href : 속성명
  - "속성값"
  - 공백 x, 쌍따옴표 사용!
  - 태그별로 사용할 수 있는 속성이 다르다.
  - 속성을 통해 태그의 부가적인 정보를 설정할 수 있음.
  - 요소는 속성을 가질 수 있으며, 경로나 크기와 같은 추가적인 정보를 제공.
  - 요소의 시작 태그에 작성하며 보통 이름과 값이 하나의 쌍으로 존재.
  - 태그와 상관없이 사용 가능한 속성들도 있음.

- HTML Global Attribute : 모든 HTML 요소가 공통으로 사용할 수 있는 속성(몇몇 요소에는 아무 효과가 없을 수 있음.)
  - id, class
  - hidden
  - lang
  - style
  - tabindex
  - title
- 시맨틱 태그
  - HTML5에서 의미론적 요소를 담은 태그의 등장.
  - 대표적인 태그들
    - header : 문서 전체나 섹션의 헤더(머릿말 부분)
    - nav : 내비게이션
    - aside : 사이드에 위치한 공간, 메인 콘텐츠와 관련성이 적은 콘텐츠
    - section : 문서의 일반적인 구분, 컨텐츠의 그룹을 표현
    - article : 문서, 페이지, 사이트 안에서 독립적으로 구분되는 영역
    - footer : 문서 전체나 섹션의 푸터
  - 개발자 및 사용자 뿐만 아니라 검색엔진 등에 의미 있는 정보의 그룹을 태그로 표현
  - 단순히 구역을 나누는 것 뿐만 아니라 '의미'를 가지는 태그들을 활용하기 위한 노력
  - Non semantic 요소는 div, span 등이 있으며 h1, table태그들도 시맨틱 태그로 볼 수 있음
  - 요소의 의미가 명확해지기 때문에 코드의 가독성을 높이고 유지보수를 쉽게 함.
  - 검색엔진최적화를 위해서 메타태그, 시맨틱 태그 등을 활용한 마크업을 효과적으로 할 필요가 있다.



## HTML 문서 구조화

- 시멘틱 웹
  - 웹 상에 존재하는 수많은 웹 페이지들에 메타데이터를 부여하여, 기존의 단순한 데이터의 집합이었던 웹페이지를 '의미'와  '관련성'을 가지는 거대한 데이터베이스로 구축하고자 하는 발상.
- 그룹컨텐츠 (필기위해 띄어쓰기로 작성.)
  - < p > : 문단
  - < hr > : 헤드라인
  - < ol >, < ul >
    - < ol > : ordered list. 순서 있는 목록.
    - < ul > : unordered list. 순서 없는 목록.
  - < pre >, < blockquote > : 주석, 인용문
  - < div > : 그룹화
- 텍스트 관련요소
  - < a >
  - < b >  vs  < strong >
    - 출력값 같음. 굵게.
    - < b > : 굵게 표현
    - < strong > : + 강조
  - < i >  vs  < em >
    - 출력값 같음. 기울임체
    - < em > : 강조.
  - < span >,  < br >,  < img >
    - < span >, < div > : 의미없이 구조만 잡음.
    - < span > : 인라인요소(텍스트만큼 너비 차지)
    - < div > : 블록요소(한 칸 다 차지)
    - < br > : 라인 넘어가기
    - < img > : 이미지 태그
- table
  - < tr >,  < td >,  < th >
  - < thread > , < tbody >,  < tfoot >
  - <  caption >
  - 셀 병합 속성 : clospan, rowspan
  - space 속성
  - < col >,  < colgroup >
- form
  - < form >은 서버에서 처리될 데이터를 제공하는 역할
  - < form >의 기본 석성
    - action : 어디로 보낼지
    - method : http method 어떤걸 선택할지
- input
  - 다양한 타입을 가지는 입력 데이터 필드
  - < label > : 서식 입력 요소의 캡션
  - < input > : 공통 속성
    - name, placeholder
    - required
    - autofocus
- 마크업해보기
  - label : 출력 뿐아니라 누르면 input 태그선택 활성화됨. 인라인구조.
  - autofocus : 가장 먼저 focusing 잡을 곳 설정.
  - required : 선택안하면 제출x



## CSS

- CSS (Cascading Style Sheets) : 스타일, 레이아웃 등을 통해 문서(HTML)를 표시하는 방법을 지정하는 언어.
- CSS 구문은 선택자와 함께 열림.
- 선택자를 통해 스타일을 지정할 HTML 요소를 선택.
- 중괄호 안에서는 속성과 값, 하나의 쌍으로 이루어진 선언을 진행
- 각 쌍은 선택한 요소의 속성, 속성에 부여할 값을 의미.
  - 속성 : 어떤 스타일 기능을 변경할 지 결정.
  - 값 : 어떻게 스타일 기능을 변경할지 결정.
- CSS 정의방법
  - 인라인(inline) : 해당 태그에 직접 style 속성을 활용.
  - 내부참조(embedding) -  <style> : head 태그 내에 <style>에 지정.
  - 외부참조(link file) - 분리된 CSS 파일 : 외부 CSS 파일을 <head> 내 <link>를 통해 불러오기



## CSS Selector

- 선택자

  - HTML 문서에서 특정한 요소를 선택하여 스타일링 하기위해서는 반드시 선택자라는 개념이 필요하다.

  - 기본 선택자

    - 전체 선택자(*), 요소 선택자(h2, h3...)
    - 클래스 선택자, 아이디 선택자, 속성 선택자

  - 결합자

    - 자손 결합자, 자식 결합자

    - 일반 형제 결합자, 인접 형제 결합자

    - ```
      /*자식결합자*/
      .box > p
      
      /*자손결합자*/
      .box p
      ```

  - 의사 클래스/요소

    - 링크, 동적 의사 클래스
    - 구조적 의사 클래스

- CSS 선택자 정리

  - 요소 선택자 : HTML 태그를 직접 선택
  - 클래스 선택자 : 마침표 문자로 시작하며, 해당 클래스가 적용된 모든 항목을 선택.

  - 아이디 선택자 
    - #문자로 시작하며 해당 아이디가 적용된 모든 항목을 선택.
    - 일반적으로 하나의 문서에 1번만 사용.
    - 여러 번 사용해도 동작하지만, 단일 id를 사용하는 것을 권장.

- CSS 적용 우선 순위

  1. 중요도 : !important

  2. 우선순위

     인라인 > id선택자 > class선택자 > 요소 선택자

  3. 소스순서

- CSS 상속

  - CSS는 상속을 통해 부모 요소의 속성을 자식에게 상속한다.

    - 속성 중에는 상속이 되는 것과 되지 않는 것들이 있다.

    - 상속 되는 것 : Text 관련 요소(font, color, text-align), opacity, visibility 등

    - 상속 되지 않는 것 : Box model 관련 요소(width, height, margin, padding, border, box-sizing, display), position 요소(positon, top/right/bottom/left,z-index) 등

    - ```
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
          p {
            /* 상속됨 */
            color: red; 
            /* 상속 안됨 */
            border: 1px solid black;
          }
      
          span {
            border: 1px solid blue;
          }
        </style>
      </head>
      <body>
        <p>안녕하세요 <span>김싸피</span> 입니다.</p>
      </body>
      </html>
      
      ```

    

- ```
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      h2 {
        color: darkviolet !important;
      }
  
      p {
        color: orange;
      }
      
      .blue {
        color: blue;
      }
  
      .green {
        color: green;
      }
  
      #red {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>1</p>
    <p class="blue">2</p>           우선순위:class가 더 높음.
    <p class="blue green">3</p>     우선순위:마지막에 선언된 게 적용.
    <p class="green blue">4</p>     우선순위:마지막에 선언된 게 적용.
    <p id="red" class="blue">5</p>  우선순위:id가 가장 우선순위 높음.
    <h2 id="red" class="blue">6</h2>
    <p id="red" class="blue" style="color: yellow;">7</p>    인라인이 가장 우선순위 높음.
    <h2 id="red" class="blue" style="color: yellow;">8</h2>
  </body>
  </html>
  ```

  ![2021-08-16 16;29;45](../../picture/2021-08-16%2016;29;45.PNG)



## CSS 단위

- 크기 단위

  - px : 모니터 해상도의 한 화소인 '픽셀'을 기준. 픽셀의 크기는 변하지 않기 때문에 고정적인 단위.

  - % : 백분율 단위. 가변적인 레이아웃에서 자주 사용.

  - em : (바로 위, 부모 요소에 대한) 상속의 영향을 받음. 

    ​	배수 단위, 요소에 지정된 사이즈에 상대적인 사이즈를 가짐.

  - rem : (바로 위, 부모 요소에 대한) 상속의 영향을 받지 않음.

    ​	최상위 요소(html)의 사이즈를 기준으로 배수 단위를 가짐.

  - viewport

    - 웹페이지를 방문한 유저에게 바로 보이게 되는 웹 컨텐츠의 영역
    - 주로 스마트폰이나 태블릿 디바이스의 화변을 일컫는 용어로 사용됨.
    - 글자 그대로 디바이스의 viewort를 기준으로 상대적인 사이즈로 결정됨.
    - vw(view width), vh(view height), vmin(최소), vmax(최대)

  - ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        .em {
          font-size: 1.5em;
        }
    
        .rem {
          font-size: 1.5rem;
        }
      </style>
    </head>
    <body>
      <ul class="em">
        <li class="em">1.5em</li>         -> 36px
        <li class="rem">1.5rem</li>       -> 24px
        <li>no class</li>                 -> 24px, 상속받았기에
      </ul>
    </body>
    </html>
    ```

  

- 색상 단위
  1. 색상 키워드
     - 대소문자를 구분하지 않음
     - red, blue, black과 같은 특정 색을 직접 글자로 나타냄.
  2. RGB 색상
     - 16진수 표기법 혹은 함수형 표기법을 사용해서 특정 색을 표현하는 방식
     - '#' + 16진수 표기법
     - rgb() 함수형 표기법
  3. HSL 생상
     - 색상, 채도, 명도를 통해 특정 색을 표현하는 방식.



## Selectors 심화

- 결합자

  - 자손 결합자 : selectorA 하위의 모든 selectorB 요소

    ```
    div span {
    	color : red;
    }
    <div>
    	<span>이건 빨강입니다.</span>
    	<p>이건 빨강이 아닙니다.</p>
    	<p>
    		<span>이건 빨강입니다.</span>
        </p>
    </div>
    ```

  - 자식 결합자 : selectorA 바로 아래의 selectorB 요소

    ```
    div > span {
    	color : red;
    }
    <div>
    	<span>이건 빨강입니다.</span>
    	<p>이건 빨강이 아닙니다.</p>
    	<p>
    		<span>이건 빨강이 아닙니다.</span>
        </p>
    </div>
    ```

  - 일반 형제 결합자 : selectorA의 형제 요소 중 뒤에 위치하는 selectorB 요소를 모두 선택.

    ```
    p ~ span{
    	color : red;
    }
    
    <span>p태그의 앞에 있기 때문에 이건 빨강이 아닙니다.</span>
    <p>여기 문단이 있습니다.</p>
    <b>그리고 코드도 있습니다.</b>
    <span>p태그와 형제이기 때문에 이건 빨강입니다!</span>
    <b>더 많은 코드가 있습니다.</b>
    <span>이것도 p태그와 형제이기 때문에 빨강입니다!</span>
    ```

  - 인접 형제 결합자 : selectorA의 형제 요소 중 바로 뒤에 위치하는 selectorB 요소를 선택.

    ```
    p + span{
    	color : red;
    }
    
    <span>p태그의 앞에 있기 때문에 이건 빨강이 아닙니다.</span>
    <p>여기 문단이 있습니다.</p>
    <span>p태그와 인접한 형제이기 때문에 이건 빨강입니다!</span>
    <b>그리고 코드도 있습니다.</b>
    <span>p태그와 인접한 형제가 아니기 때문에 빨강이 아닙니다!</span>
    ```

    



## CSS Box model

- 모든 HTML 요소는 box 형태로 되어있음

- 하나의 박스는 네 부분으로 이루어짐
  - content : 글이나 이미지 등 요소의 실제 내용
  - padding : 테두리 안쪽의 내부여백. 요소에 적용된 배경색, 이미지는 padding까지 적용.
  - border :  테두리 영역
  - margin : 테두리 바깥의 외부 여백. 배경색을 지정할 수 없다.

- box-sizing
  - 기본적으로 모든 요소의 box-sizing은 content-box
    - Padding을 제외한 순수 contents 영역만을 box로 지정.
  - 다만, 우리가 일반적으로 영역을 볼 때는 border까지의 너비를 100px 보는 것을 원함.
    - 그 경우 box-sizing을 border-box로 지정.
  
- Box model
  - 마진상쇄 : block A의 top과  block B의 bottom에 적용된 각각의 margin이 둘 중에서 큰 마진 값으로 결합(겹쳐지게) 되는 현상.
  
  - .margin-1{margin:10px;} : 상하좌우
  - .margin-2{margin:10px 20px;} : 상하 / 좌우
  - .margin-3{margin:10px 20px 30px;} : 상 / 좌우 / 하
  - .margin-4{margin:10px 20px 30px 40px;} : 상 / 우 / 하 / 좌   



## CSS Display

- 마진상쇄 : 인접 형제 요소 간의 margin이 겹쳐서 보임.
- 모든 요소는 네모(박스모델)이고, 어떻게 보여지는지에 따라 문서에서의 배치가 달라질 수 있다.
- 블록 레벨 요소와 인라인 레벨 요소
  - 블록 레벨 요소와 인라인 레벨 요소 구분.
  - 대표적인 블록 레벨 요소 : div / ul, ol, li / p / hr / form 등
  - 대표적인 인라인 레벨 요소 : span / a / img / input, label / b, em, i, strong 등 
- display
  - block
    - 줄 바꿈이 일어나는 요소
    - 화면 크기 전체의 가로 폭을 차지한다.
    - 블록 레벨 요소 안에 인라인 레벨 요소가 들어갈 수 있음.
  - inline
    - 줄 바꿈이 일어나지 않는 행의 일부 요소
    - content 너비만큼 가로 폭을 차지한다.
    - width, height, margin-top, margin-bottom을 지정할 수 없다.
    - 상하 여백은 line-height로 지정한다.
  - inline-block
    - block과 inline 레벨 요소의 특징을 모두 갖는다.
    - inline처럼 한 줄에 표시 가능하며,
    - block처럼 width, height, marin 속성을 모두 저장할 수 있다.
  - none
    - 해당 요소를 화면에 표시하지 않는다. (공간조차 사라진다.)
    - 이와 비슷한 visibility : hidden은 해당 요소가 공간은 차지하나 화면에 표시만 하지 않는다.



![Bonus: Aligning with Auto Margins | SamanthaMing.com](https://samanthaming.gumlet.io/flexbox30/31-flexbox-with-auto-margins.jpg.gz)



|             block 요소              |    inline 요소     |
| :---------------------------------: | :----------------: |
|         margin-right:auto;          |  text-align:left;  |
|          margin-left:auto;          | text-align:right;  |
| margin-right:auto;margin-left:auto; | text-align:center; |



# CSS position

- 문서 상에서 요소를 배치하는 방법을 지정한다.
- static : 모든 태그의 기본값(기준 위치)
  - 일반적인 요소의 배치 순서에 따름(좌측상단)
  - 부모 요소 내에서 배치될 때에는 부모 요소의 위치를 기준으로 배치 됨.
- 아래는 좌표 프로퍼티(top, bottom, left, right)를 사용하여 이동이 가능하다. (음수 값도 가능)
  - relative : 상대위치
    - 자기 자신의 static 위치를 기준으로 이동.
    - 레이아웃에서 요소가 차지하는공간은 static일 때와 같음.
  - absolute : 절대위치
    - 요소를 일반적인 문서 흐름에서 제거 후 레이아웃에 공간을 차지하지 않음.
    - static이 아닌 가장 가까이 있는 부모/조상 요소를 기준으로 이동. (없는 경우 body에 붙는 형태)
    - 원래 위치해 있었던 과거 위치에 있던 공간은 더 이상 존재하지 않음.
    - 즉, 다른 모든 것과 별개로 독자적인 곳에 놓임.
    - 페이지의 다른 요소의 위치와 간섭하지 않는 격리된 사용자 인터페이스 기능을 만드는데 활용.
      - 팝업 정보 상자, 제어 메뉴, 롤오버 패널, 페이지 어느 곳에서나 끌어서 놓기 할 수 있는 유저 인터페이스 페이지 등등
  - fixeed : 고정 위치
    - 요소를 일반적인 문서 흐름에서 제거 후 레이아웃에 공간을 차지하지 않음
    - 부모요소와 관계없이 viewport를 기준으로 이동
    - 스크롤 시에도 항상 같은 곳에 위치함.