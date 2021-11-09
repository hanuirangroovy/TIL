# Vue

- https://kr.vuejs.org/
- 시작하기 - 개발버전 CDN 사용
- vscode에서 'Vetur' 설치
- chrome 웹스토어에서 'vue.js devtools'  설치
- 우측 상단에서 확장프로그램에서 Vue devtools 고정
- devtools 오른쪽 클릭 후 확장 프로그램 관리 - 파일 url에 대한 액세스 허용 활성화
- Vue.js가 사용되면 오른쪽 상단에 불이 들어옴
- 개발자도구에 Vue 메뉴 생김



## Vue CLI

- https://cli.vuejs.org/guide/installation.html

- ```bash
  npm install -g @vue/cli
  vue --version
  ```



## 프로젝트

1. 프로젝트 생성: vue create <프로젝트 이름>

2. 프로젝트 폴더로 이동: cd <프로젝트 이름>

3. 프로젝트 생성 확인: vue run serve
4. helloWorld 삭제:
5. data 정의
   - inputValue: null, // TheSearchBar로부터 입력받은 값을 저장
   - videos: [], //외부 youtube API 검색 결과(비디오 리스트)
   - selectedVideo: null //videoListItem으로부터 선택된 비디오
6. axios install: npm i axios
7. axios import: import axios from 'axios'

