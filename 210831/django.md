# Django

## Web Framework

- Django
  - python web framework
  - 반복되는 것들은 프레임워크가 책임짐.

- Framework Architecture
  - MVC : 프로그램 구조 디자인에 대한...
    - model : 데이터
    - view : 화면
    - controller : 제어 (범위 체크 등)

- MTV Pattern

  - model     ↔ MVC : model
  - Template     ↔ MVX : view
  - View     ↔ MVC : controller

  - 화면에 보여지는 Template(틀을 만든 것)는 html로

  

  1. 넘어오는 페이지 주소로 view와 연결할 수 있도록 urls.py

  2. model과 html 연결해주기 위해 view 만들어줘야 
  3. html 파일 만들어야 (동적 데이터 처리해줘야하기에 지난번 배운 html과 다름)



## 실습

1. 설치확인

   $pip list

2. 설치

   $pip install django

3. 실습 폴더 만들기/이동

   00_django_intro 폴더 만들기

4. 프로젝트 생성

   $django-admin startproject firstpjt  

   - python이나 Django에서 사용중인 키워드, "-" 하이픈 사용x

5. vscode 실행

6. 프로젝트안에서 

   $python manage.py runserver

   - manage.py를 통해 서버에 명령

   - 흉내내는 서버 만들어줌

7. 서버실행 확인

8. ctrl + c 누르면 서버 나가게됨



urls.py : 웹주소 연결온 거 view와 연결하는 데 씀.

wsgi.py : 디폴트로 쓰는 건 이미지정. 

manage.py :장고 명령 실행 방법



$ python manage.py startapp articles

command option articles라는 application을 만들어라



## Built-in template tags and filters

https://docs.djangoproject.com/en/3.2/ref/templates/builtins/#date