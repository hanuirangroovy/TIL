# 1. SQL 기본 및 활용 - DDL

## 목차

1. [OBJECT의 종류](#1-OBJECT의-종류)
2. [OBJECT 관련 DDL](#2-OBJECT-관련-DDL)
3. [제약 조건](#3-제약-조건)
4. [VIEW, SEQUENCE, SYNONYM, INDEX](#4-VIEW-SEQUENCE-SYNONYM-INDEX)



## 1. OBJECT의 종류

|  OBJECT  |                      설명                      |
| :------: | :--------------------------------------------: |
|  TABLE   |                  Data를 저장                   |
|  INDEX   |   테이블의 data에 대한 빠른 검색을 위한 수단   |
|   VIEW   | 테이블의 data를 접근하기 위한 SELECT 문을 저장 |
| SYNONYM  |         OBJECT에 대해 다른 이름을 제공         |
| SEQUENCE |          Key 값을 생성하기 위한 용도           |



## 2. OBJECT 관련 DDL

| 구분 |   명령문    |              설명               |
| :--: | :---------: | :-----------------------------: |
| DDL  |  C(CREATE)  |    DB에 각종 오브젝트를 생성    |
| DDL  |  A(ALTER)   |         오브젝트를 변경         |
| DDL  |  R(RENAME)  |     오브젝트의 이름을 바꿈      |
| DDL  | T(TRUNCATE) | 테이블 내의 모든 행(row)을 없앰 |
| DDL  |   D(DROP)   |         오브젝트를 제거         |

- ROLLBACK 할 수 없음

- CREATE TABLE

  - ```
    CREATE TABLE table_name(
    	col_1 datatype [NULL|NOT NULL],
    	...
    );
    ```

  - 1. 칼럼이름, 2. 데이터 타입, 3. 제약조건

  - ```
    CREATE TABLE emp1(
    	empno NUMBER(4) CONSTRAINT emp1_pk PRIMARY KEY,
    	ename VARCHAR2(10),
    	hiredate DATE DEFAULT sysdate NOT NULL,
    	sal NUMBER(10) DEFAULT 200
    );
    ```

- Data Types

  - 문자
  - 숫자
  - 날짜 및 시간
  - LOB

- 문자 타입

  - |  Data Type   |         설명         |       길이       |
    | :----------: | :------------------: | :--------------: |
    |  CHAR[(n)]   |      고정 길이       | 최대 2000 바이트 |
    | VARCHAR2(n)  |      가변 길이       | 최대 4000 바이트 |
    |  NCHAR[(n)]  | 고정 길이의 유니코드 | 최대 2000 바이트 |
    | NVARCHAR2(n) | 가변 길이의 유니코드 | 최대 4000 바이트 |
    |     LONG     |      가변 길이       |    최대 2 GB     |

  - [(n)] 생략하는 경우 : 1 바이트 저장

  - 가변 길이를 나타낼 때는 길이 생략 불가

- 숫자 타입

  - |   Data Type    |                           설명                            |      길이      |
    | :------------: | :-------------------------------------------------------: | :------------: |
    | NUMBER[(p, s)] | 가변길이<br />p는 전체 자릿수<br />s는 소수점 이하 자릿수 | 최대 21 바이트 |
    |  BINARY_FLOAT  |                   32 bit 부동 소수점 수                   |    4 바이트    |
    | BINARY_DOUBLE  |                   64 bit 부동 소수점 수                   |    8 바이트    |

  - NUMBER의 경우 [(p,s)] 생략 가능

- 날짜 및 시간 타입

  - | Data Type |          설명          |                   길이                   |
    | :-------: | :--------------------: | :--------------------------------------: |
    |   DATE    | 고정 길이 날짜 및 시간 |      7바이트,<br />NLS_DATE_FORMAT       |
    | TIMESTAMP |  Millisecond까지 표현  | 7 ~ 11 바이트,<br />NLS_TIMESTAMP_FORMAT |

  - TIMESTAMP WITH TIME ZONE
  - TIMESTAMP WITH LOCAL TIME ZONE
  - INTERVAL YEAR TO MONTH
  - INTERVAL DAY TO SECOND

- LOB 타입

  - | Data Type |                  설명                   |   길이    |
    | :-------: | :-------------------------------------: | :-------: |
    |   CLOB    |  큰 문자 데이터 저장<br /> LONG의 확장  | 최대 4 GB |
    |   NCLOB   |         NATIONAL CHARACTER SET          | 최대 4 GB |
    |   BLOB    | 오디오, 사진, 비디오 Binary 형태로 저장 | 최대 4 GB |
    |   BFILE   |    외부 운영체제 파일 시스템에 저장     |           |

- CTAS

  - ```
    CREATE TABLE my_table
    	AS (SELECT * FROM base_table);
    ```

    - base_table과 구조가 똑같은 my_table이름으로 테이블 생성
    - SELECT 문에 의해 읽어드린 데이터가 my_table로 그대로 들어감

  - ```
    CREATE TABLE empSALES
    AS (SELECT * FROM emp
    	WHERE job = 'SALESMAN');
    ```

    - emp에서 job이 SALESMAN을 만족하는 데이터가 들어있는 empSALES테이블 생성
    - 테이블을 먼저 만든 후, 데이터를 입력하는 것보다 훨씬 빠르다.
    - ROLLBACK이 되질 않는다.

  - ```
    CREAT TABLE emp2
    AS (SELECT * FROM emp
    	WHERE 1 = 2);
    ```

    - 테이블은 만들되, 데이터는 입력하지 않는 선에서 작업이 시행
    - 같은 구조를 갖는 테이블만 생성됨



## 3. 제약 조건



## 4. VIEW, SEQUENCE, SYNONYM, INDEX

