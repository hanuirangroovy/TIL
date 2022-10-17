# Entity Framework Core

- Code-First - 코드작성 우선주의
- Database-First - 데이터베이스 작업 우선주의
- Migrations - 미리 작성된 코드로 데이터베이스에 테이블과 컬럼 생성.
- Entity Data Modeling - 코드를 손쉽게 작성할 수 있도록 도와줌.



## Code-First 방식

- User.cs
  - 사용자 아이디: Primary Key지정, 컬럼길이 지정, 컬럼유형 지정
  - 사용자 이름, 이메일, 비밀번호 : Not null 지정, 컬럼길이 지정, 컬럼유형 지정
- 복합키 지정. Data annotations에서 각각 Primary Key 지정하는 것만으로는 복합키로 사용불가
  - 예를 들기 위해 UserRole과 UserRolesByUser 테이블 추가
