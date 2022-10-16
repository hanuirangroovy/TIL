# 의존성주입 패턴

- Services 프로젝트 구성
  - 서비스의 재사용성
  - 모듈화를 통한 효율적 관리


- Data Model - Database와 연동할 Model
- Data 프로젝트 - 모델관리용 프로젝트
- 폴더
  - NetCore.Data
    - DataModels 폴더 - 데이터모델 관리용
      - C# Class - Database Table
      - Member 변수 - Table Column
    - ViewModels 폴더 - 뷰모델 관리용
  - NetCore.Services
    - Interfaces
      - Interface - 실제 사용할 서비스메서드 선언
    - Svcs
      - 사용자 정보가 담긴 테이블을 만들어야 함. 이름은 User. 
      - User 정보들을 list로 담아오는 GetUserInfos라는 method 만듦. 
      - 데이터베이스와 연동해서 작업하기 위한 모델 필요한데 이게 Data Model. 이것을 위해 NetCore.Data 프로젝트 추가
      - Service class - Interface를 상속받은 후에 명시적으로 Interface 구현
  - NetCore.Web
    - Controllers
      - MembershipController
        - Service class - Interface에서 Service를 사용하기 위해 Service class 인스턴스를 받아온다.
    - Views
      - _ViewImports.cshtml
        - Web 프롲게트 전체적으로 View들에 사용될 using 참조문을 관리하는 파일
        - 이 곳에 ViewModel의 Namespace 지정.
- 의존성 주입 방식 - 생성자 주입

  - 생성자 주입방식은 생성자의 파라미터를 통해 인터페이스를 지정하여 서비스클래스 인스턴스를 받아옴
  - 의존성 주입을 사용하기 위해 껍데기에 내용물을 넣어주는 서비스를 등록함
