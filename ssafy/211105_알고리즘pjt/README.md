# 알고리즘 PJT

##  infinite scroll

- Pagination
  - https://docs.djangoproject.com/en/3.2/topics/pagination/
- js Deliver CDN
  - https://github.com/axios/axios 
- scroll height
  - https://developer.mozilla.org/ko/docs/Web/API/Element/scrollHeight
  - document.documentElement.scrollHeight - 스크롤 맨 위부터 아래 다 했을 때 픽셀 크기
  - document.documentElement.clientHeight - 보고있는 영역
  - document.documentElement.scrollTop - 내려간 영역
    - https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop



## social login

- oauth

  - 설명
    - https://d2.naver.com/helloworld/24942
    - https://showerbugs.github.io/2017-11-16/OAuth-%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C
  - 공식문서 
    - https://django-allauth.readthedocs.io/en/latest/installation.html
    - https://github.com/pennersr/django-allauth

- 구글 클라우드 플랫폼 - api 서비스

  - https://console.cloud.google.com/getting-started?hl=ko&pli=1
    - 새로운 프로젝트 생성
    - 탐색 - API 및 서비스 - OAuth 동의 화면 (외부)- * 작성 - 작성 후 사용자 인증 정보 - 클라이언트 ID(사용자 인증 정보 만들기)
    - redirect 주소를 http://127.0.0.1:8000/accounts/google/login/callback/ 로!! 승인된 리디렉션 URI에 넣어주기 - 콜백하는 주소
    - 클라이언트 ID와 비번 발급 -> admin 소셜 계정에서 사용
  - 구글에서 작용하는 oauth 작용원리
    - https://django-allauth.readthedocs.io/en/latest/providers.html#google

- https://django-allauth.readthedocs.io/en/latest/templates.html - login.html에 Social Account Tags 사용

  

