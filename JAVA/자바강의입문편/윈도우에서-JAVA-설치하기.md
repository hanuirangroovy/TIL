# 윈도우에서 JAVA 설치하기

> https://www.youtube.com/watch?v=F4NqGYPrwIU&list=PLnMsd-1ByVzo6HGC8iAlrBAUXsDUOaAGy



## JDK 설치

- JAVA 해석해주는 도구
- 버전 - jdk 11

1. oracle jdk 11 download 검색
2. https://www.oracle.com/kr/java/technologies/javase/jdk11-archive-downloads.html 접속
3. Java SE Development Kit 11.0.16 x64 Installer 다운로드



## IDE 통합 개발 도구 - 인텔리제이

1. jetbrains toolbox 검색
2. https://www.jetbrains.com/ko-kr/toolbox-app/ 접속 및 다운로드
3. IntelliJ IDEA Community 다운로드 및 실행
4. setting창에서 Do not import settings 체크 후 확인 버튼
5. Create New Project 클릭
6. first java 프로젝트 생성



## Hello world 출력

- src 폴더에 main, test 가 생김
- 그 안에 java, 리소스 각각 들어있음

1. main - java 마우스 우측 클릭 - New - Package - lec01 생성
2. lec01 마우스 우측 클릭 - New - Java Class - Hello 클래스 생성
3. 클래스 안에 main 치고 엔터
4. 그 안에 sout 치고 엔터
5. Hello world 입력
6. Run 클릭

```
package lec01;

public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello world");
    }
}
```



- 에러 해결

  - ```
    Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.
    
    You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.
    
    See https://docs.gradle.org/7.4/userguide/command_line_interface.html#sec:command_line_warnings
    ```

  - 설정 - gradle 검색 - Build and run - Build and run using, Run tests using 탭을 IntelliJ IDEA로 변경