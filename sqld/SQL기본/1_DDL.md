# 1. SQL 기본 및 활용 - DDL

> https://www.youtube.com/watch?v=iPxbcmhYQ2o&list=PLlCujDgOz8x6nDWtRr5AlHWB9Xp-Lxf-z&index=1&t=1044s



## 목차

1. [OBJECT의 종류](#1-OBJECT의-종류)
2. [OBJECT 관련 DDL](#2-OBJECT-관련-DDL)
3. [제약 조건](#3-제약-조건)
4. [VIEW](#4-VIEW)
5. [SEQUENCE](#5-SEQUENCE)
6.  [SENONYM](#6-SYNONYM)
7.  [INDEX](#7-INDEX)



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

- 칼럼추가

  - ```
    ALTER TABLE table_name
    ADD (col_1 column-definition,
    	...);
    ```

  - 1. 컬럼이름, 2. 데이터 타입, 3. 기본값, NULL 여부

  - ```
    CREATE TABLE emp1
    (empno NUMBER(4),
    ename VARCHAR(10),
    hiredate DATE,
    sal NUMBER(10) DEFAULT 0
    );
    
    ALTER TABLE emp1
    ADD (phone VARCHAR2(20),
    	address VARCHAR2(20));
    ```

    - 테이블에 데이터가 많이 있는 경우에도 칼럼을 추가하는 것은 시간이 걸리지 않는다.

- 칼럼 Data type 변경

  - ```
    ALTER TABLE table_name
    MODIFY (col_1 column-definition,
    	...);
    ```

  - ```
    ALTER TABLE emp1
    MODIFY (ename VARCHAR2(20));
    ```

-  칼럼 제거

  - ```
    ALTER TABLE table_name
    DROP (col_1, col_2,...);
    Or
    ALTER TABLE table_name
    DROP COLUMN col_1, col_2, ...;
    ```

  - ```
    ALTER TABLE emp1
    DROP (phone);
    
    ALTER TABLE emp1
    DROP COLUMN address;
    ```

  - 테이블에 데이터가 많을수록 시간이 많이 수요된다

- TRUNCATE TABLE

  - ```
    TRUNCATE TABLE
    [schema_name.]table_name
    [ PRESERVE MATERIALIZED VIEW LOG | PURGE MATERIALIZED VIEW LOG ]
    [ DROP STORAGE | REUSE STORAGE ];
    ```

  - 테이블의 데이터를 통째로 없앨 때 사용하는 명령

  - HMW를 reset하는 것으로 시간이 걸리지 않는다

- DROP TABLE

  - ```
    DROP TABLE [schema_name].table_name
    [ CASCADE CONSTRAINTS ]
    [ PURGE ];
    ```

  - 테이블이 필요 없을 때 사용할 수 있는 명령

  - [ CASCADE CONSTRAINTS ], [ PURGE ] : 옵션

  - [ CASCADE CONSTRAINTS ] - 자주 사용. 테이블과 관련된 제약조건들을 테이블이 DROP 될 때 연달아 같이 없애고자 하는 것.



## 3. 제약 조건

|  제약 조건  |                      설명                       |
| :---------: | :---------------------------------------------: |
|  NOT NULL   |     칼럼이 NULL 값을 포함하지 못하도록 지정     |
|   UNIQUE    |    칼럼 값이 해당 테이블 전체에서 유일한 값     |
| PRIMARY KEY |                NOT NULL & UNIQUE                |
| FOREIGN KEY | 입력되어야 할 값이 다른 테이블의 칼럼 값을 참조 |
|    CHECK    |    해당 조건을 만족하는 값으로만 입력을 제한    |

- 이와 같은 제약 조건이 없으면 무엇이 문제가 되나?
  - 문제 많음. 프로그래밍 할 때 로직에 의해서 제약조건이 하는 부분들을 코딩 해줘야 함



- PRIMARY KEY

  - ```
    CREATE TABLE tale_name(
    	col_1 datatype [NULL|NOT NULL],
    	...
    	CONSTRAINT constraint_name
    		PRIMARY KEY (col_1, col_2, ...));
    ```

  - ```
    CREATE TABLE emp1
    (empno NUMBER(4),
    ename VARCHAR(10),
    deptno NUMBER(2),
    CONSTRAINTS emp1_pk PRIMARY KEY (empno)
    );
    ```

    - 테이블 레벨로 만드는 경우: 마지막 column 뒤에 선언하는 것
    - 두 개 이상의 column이 된다면 테이블 레벨에서 하는 것이 일반적
    
  - ```
    CREATE TABLE emp1
    (empnoo NUMBER(4) CONSTRAINTS emp1_pk PRIMARY KEY,
      ename VARCHAR2(10),
      deptno NUMBER(2),
    );
    ```
    
    - 칼럼 레벨로 만드는 경우: column 옆에 선언하는 것



- ALTER TABLE - 테이블을 만든 후 제약조건 추가도 가능

  - ```
    ALTER TABLE table_name
    ADD CONSTRAINT constraint_name
    	PRIMARY KEY(col_1, col_2, ...);
    ```

  - ```
    CREATE TABLE emp1
    (empno NUMBER(4),
    ename VARCHAR2(10),
    deptno NUMBER(2)
    );
    
    ALTER TABLE emp1
    ADD CONSTRAINT emp1_pk PRIMARY KEY (empno);
    ```



- FOREIGN KEY

  - ```
    CREATE TABLE table_name(
      col_1 datatype [NULL|NOT NULL],
      ...
      CONSTRAINT constraint_name
        FOREIGN KEY (col_1, col_2, ..., col_n)
        REFERENCES parent_table(col_1, col_2, ..., col_n));
    ```

    - 테이블 만들 때 지정
    
  - ```
    CREATE TABLE dept1
    (deptno NUMBER(2) CONSTRAINT dept1_pk PRIMARY KEY,
      dname VARCHAR2(14),
      loc_code VARCHAR2(2));
      
    CREATE TABLE emp1
    (empno NUMBER(4) CONSTRAINT em1_pk PRIMARY KEY,
      ename VARCHAR2(10),
      deptno NUMBER(2),
      CONSTRAINT emp_fk1 FOREIGN KEY (deptno)
        REFERENCES dept1(deptno));
    ```

  - 두 테이블에 데이터가 있을 경우에 dept1 테이블의 데이터를삭제하는 경우엔 어떻게 될까?
  
    - dept1에 입력된 데이터가 아닌 이상 emp1에 입력 불가능.
    - dept1에 데이터를 참조하는 테이블이 있는 이상 emp1을 없앨 수는 없다.
    - 만약 두 테이블에 대한 작업을 다시 해야한다면 emp1부터 없애고 dept1을 없애는 선에서 작업해야함. FOREIGN KEY가 있어서 그럼.



- ALTER TABLE

  - ``` 
    ALTER TABLE table_name
    ADD CONSTRAINT constraint_name
    	FOREIGN KEY (col_1, ..., col_n)
    	REFERENCES
    		parent_table (col_1, ..., col_n)
    	ON DELETE CASCADE;
    ```

  - ON DELETE CASCADE는 참조하고 있는 parent 테이블의 데이터를 삭제하면 관련된 데이터를 함께 삭제시킴



- CHECK

  - ```
    CREATE TABLE talbe_name(
    	col_1 datatype [NULL|NOT NULL],
    	...
    	CONSTRAINT constraint_name
    		CHECK (column_name condition) [DISABLE]);
    ```

  - ```
    CREATE TABLE emp2
    (empno NUMBER(4) CONSTRAINT emp2_pk PRIMARY KEY,
      deptno NUMBER(2),
      CONSTRAINT deptno_ck
        CHECK (deptno BETWEEN 10 AND 90)
    );
    ```



- ALTER TABLE

  - ```
    ALTER TABLE table_name
    ADD CONSTRAINT constraint_name
    	CHECK (column_name condition)
    	[DISABLE];
    ```



- 계약 조건의 비활성/활성

  - ```
    ALTER TABLE table_name
    DISABLE CONSTRAINT constraint_name
    CASCADE;
    ```

  - ```
    ALTER TABLE table_name
    ENABLE CONSTRAINT constraint_name
    CASCADE;
    ```

    

## 4. VIEW

- 복잡한 쿼리 저장
- 데이터의 구조 단순화
- 사용자를 위한 편리한 인터페이스
- 테이블 자료에 대한 접근 제한
- 테이블 구조 변경에 의한 영향으로부터 프로그램을 분리



- ```
  CREATE [OR REPLACE] VIEW view_name
  AS
    SELECT column_list
  	FROM tables
  	[WHERE conditions];
  ```

- ```
  CREATE VIEW emp_v10
  AS
    SELECT empno, ename, deptno
      FROM emp
      WHERE deptno = 10;
  ```



- VIEW가 필요없을 때

  - ```
    DROP VIEW view_name;
    ```

  - ```
    DROP VIEW emp_v10;
    ```

    

## 5. SEQUENCE

- 일련 번호 생성기. 
- 테이블에 데이터를 넣을 때 KEY 값을 만들 때 씀.



- START WITH 시작값
- INCREMENT BY 증가치
- MINVALUE 최소값
- MAXVALUE 최대값
- CACHE 한 번에 읽어서 캐시에 올려놓을 수 있는 값의 개수 지정
- NOCYCLE 최대값까지 꽉 차고 나면 다시 CYCLING할 건지. 대부분안함.



- 값 참조할 때는 NEXTVAL이라는 칼럼을 사용하면 됨. NEXTVAL이라는 칼럼 앞에 SEQUENCE의 이름을 줘야함.
- 어떤 테이블이든 해당 테이블로부터 SEQUENCE의 값을 활용하고자 할 때는 SEQUENCE이름.NEXTVAL 하면 해당 값을 얼마든지 참조할 수 있음.



- ```
  CREATE SEQUENCE sequence_name
    START WITH value
    INCREMENT BY value
    MINVALUE value
    MAXVALUE value
    CACHE value
    NOCYCLE;
  ```

- ```
  CREATE SEQUENCE my_Seq
    START WITH 1
    INCREMENT BY 1
    MAXVALUE 100
    NOCYCLE
    CACHE 5;
  ```

- ```
  SELECT my_Seq.NEXTVAL FROM DUAL;
  ```



## 6. SYNONYM

- ```
  CREATE [OR REPLACE] [PUBLIC]
    SYNONYM [schema.]synonym_name
    FOR [schema.]object_name[@dblink];
  ```

- ```
  CREATE SYNONYM emp_sal
  FOR employees.salary;
  ```
  
  - SYNONYM을 만들지 않았다면 employees.salary라는 이름으로 쿼리에 해당테이블을 갖다 사용해야함.
  - SYNONYM을 만들었다면 SYNONYM 이름으로 해당 테이블 데이터를 얼마든지 사용가능. 그리고 그만큼 테이블 이름이 간결해짐. -> SYNONYM 만드는 이유



## 7. INDEX

- 테이블이 가지고 있는 데이터를 빨리 검색하고자 필요에 따라 만드는 것

- ```
  CREATE INDEX index_name
    ON table_name(column1 column2, ...);
  ```

- ```
  CREATE INDEX emp_nn_idx
  ON emp (ename);
  ```

- 많은 양의 데이터를 갖고 있는 테이블인 경우에는 인덱스를 생성할 때, 시간이 많이 소요된다.



