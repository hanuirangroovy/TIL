# 2. SQL 기본 및 활용 - DML & TCL

> https://www.youtube.com/watch?v=b8-OShLr5E8



## 목차

1. [SQL의 종류](#1-SQL의-종류)

2. [SELECT 구문](#2-SELECT-구문)

3. [INSERT](#3-INSERT)

4. [INSERT ~ SELECT](#4-INSERT--SELECT)

5. [UPDATE](#5-UPDATE)

6. [SELECT 문을 이용한 UPDATE](#6-SELECT-문을-이용한-UPDATE)

7. [DELETE](#7-DELETE)

8. [MERGE](#8-MERGE)

9. [MULTI-TABLE INSERT](#9-MULTI-TABLE-INSERT)

10. [TRANSACTION](#10-TRANSACTION)

11. [TCL](#11-TCL)

    

## 1. SQL의 종류

| 구분 | 명령문 |                        설명                         |
| :--: | :----: | :-------------------------------------------------: |
| DML  | SELECT |    데이터베이스에서 데이터를 검색할 때 사용한다.    |
| DML  | INSERT |           테이블에서 행(row)을 입력한다.            |
| DML  | UPDATE |                 행(row)을 변경한다.                 |
| DML  | DELETE |                 행(row)을 삭제한다.                 |
| DML  | MERGE  | 존재하지 않으면 INSERT, 존재하면 UPDATE를 수행한다. |



| 구분 |  명령문  |              설명               |
| :--: | :------: | :-----------------------------: |
| DDL  |  CREATE  |    DB에 각종 오브젝트를 생성    |
| DDL  |  ALTER   |         오브젝트를 변경         |
| DDL  |  RENAME  |      오브젝트 이름을 바꿈       |
| DDL  | TRUNCATE | 테이블 내의 모든 행(row)을 없앰 |
| DDL  |   DROP   |         오브젝트를 제거         |

- DDL - 테이블같은 데이터베이스에 생성할 수 있는 오브젝트를 대상으로 사용할 수 있는 명령
- DDL은 ROLLBACK 할 수 없음



| 구분 |                 명령문                  |                             설명                             |
| :--: | :-------------------------------------: | :----------------------------------------------------------: |
| TCL  |   COMMIT<br />ROLLBACK<br />SAVEPOINT   | DML문에 의한 데이터 변경과 같은 작업은 트랜잭션으로 볼 수 있는데, 이러한 작업을 완료 또는 취소하기 위한 명령이다. |
| DCL  | GRANT(권한 부여)<br />REVOKE(권한 취소) | 데이터베이스 및 해당 구조에 대한 액세스 권한을 부여하거나 제거한다. |

- TCL - DML과 관련해서 INSERT, DELETE, UPDATE와 같은 작업을 했을 때, 그 작업을 정상적으로 완료하거나 취소할 수 있어야 함. 이와 같은 용도로 사용하는 명령.



## 2. SELECT 구문

```
SELECT [DISTINCT]{*|column(s)|expr(s)[alias]}
  FROM table_name(s)
[WHERE conditions]
[GROUP BY columns]
[HAVING group_conditions]
[ORDER BY columns [ASC|DESC]];
```

- SELECT 구문은 FROM까지만 기술되어도 동작됨.
- [WHERE]~[ORDER BY]절까지는 옵션으로 생략 가능.
- ;은 누락하면 안됨



```
SELECT *
  FROM emp;
```

- *은 column을 순서대로 모두 다 찾아내겠다는 의미



```
SELECT empno, ename, sal, job, ENAME
  FROM emp;
```

- column을 SELECT 다음 나열한 경우 테이블의 칼럼 순서와는 무관함.

-  대소문자 구분 안하고 같은 컬럼을 여러차례 반복해서 SELECT 목록으로 나타낼 수도 있음.



### SELECT 구문 - 산술 표현식

| 산술 연산자 종류   | +, -, *, /                           |
| ------------------ | ------------------------------------ |
| 우선순위           | (*, /)이 (+, -)보다 우선 순위가 높다 |
| 우선순위가 같을 때 | 왼쪽에서 오른쪽으로 적용된다.        |
| 우선순위 배분      | 괄호를 사용                          |
| 사용할 수 없는 곳  | FROM 절                              |



```
SELECT ename, sal, 2*sal+100
  FROM emp;
```

```
SELECT ename, sal, 2*(sal+100)
  FROM emp;
```

- 결과가 다름



### SELECT 구문 - NULL 값

- 널(null)은 알 수 없는 값
- 0(zero)도 공백(space)도 아님
- 널(null)을 포함한 사칙연산의 결과는 널!
- 숫자를 0으로 나누면 에러가 발생되지만 널(null)로 나누면 널!



```
SELECT empno, ename, sal, comm, comm + 300
  FROM emp;
```

- comm이라는 컬럼에 null값이 다소 입력되어 있다면 결과는 null로 나타남



### SELECT 구문 - 별칭(Alias)

```
SELECT
    {column1 | expression} [AS] descriptive_name
  FROM table_name;
```

- AS라는 키워드는 생략 가능
- 별칭을 기술할 때 큰 따옴표를 사용해야하는 경우가 있음. ex."descriptive_name".
  - 별칭 안에 특수문자($, #), 공백이 사용되거나 대소문자를 구별하고자 할 때
- table도 별칭 부여 가능
  - `FROM table_name table_alias`
  - AS 키워드 없음



```
SELECT ename AS name, sal,
       sal * 12 "Annual Salary"
  FROM emp e;
```



### SELECT 구문 - Literal

- Literal은 SELECT 목록에 포함된 문자, 숫자, 날짜 등과 같은 상수
- Literal은 SELECT 목록의 칼럼과 동일하게 취급!
- Literal은 테이블이 가지고 있는 칼럼은 아니지만 SELECT 목록으로 있는 한 칼럼처럼 취급
- Literal 중에서 숫자를 제외한 문자와 날짜는 반드시 작은따옴표로 묶어야 한다.
  - 'A', '2021-04-30'
- 각 Literal은 쿼리에서 추출되는 행(row)만큼 출력된다.



```
SELECT ename 결과1, 'Abc' 결과2, sal 결과3, 500 결과1
  FROM emp;
```

![2022-08-24 23;35;00](md-images/2022-08-24%2023;35;00.PNG)



### SELECT 구문 - 연결 연산자

- 2개의 수직 바(||)로 표시
  - `ename||job`
- 연산자의 좌우에 있는 칼럼이 결합되어 하나의 칼럼으로 표시됨
- 칼럼을 다른 칼럼, 산술 계산식 또는 상수 값에 연결하여 문자식을 생성
  - `ename||sal*2000`
  - `ename||':'||job`
- 문자열에 널(null) 값을 결합할 경우 결과는 문자열
  - `ename||null`



```
SELECT ename||':'||empno||':'||job
	FROM emp;
```

![2022-08-24 23;47;53](md-images/2022-08-24%2023;47;53.PNG)



```
SELECT ename||' is a '||job AS "Employees Details"
	FROM emp;
```

![2022-08-24 23;49;14](md-images/2022-08-24%2023;49;14.PNG)



```
SELECT ename||' : 1 Year salary = '||sal * 12 Monthly
	FROM emp;
```

![2022-08-24 23;50;20](md-images/2022-08-24%2023;50;20.PNG)



### SELECT 구문 - DISTINCT

- SELECT 키워드 바로 다음에 기술
- DISTINCT 사용 시 하나의 칼럼을 지정하면 중복되는 값은 하나만 출력
- DISTINCT 다음에 여러 개의 칼럼을 지정한 경우 지정된 모든 칼럼에 영향



```
SELECT DISTINCT job
	FROM emp;
```

![2022-08-24 23;52;15](md-images/2022-08-24%2023;52;15.PNG)



```
SELECT DISTINCT job, deptno
	FROM emp;
```

![2022-08-24 23;53;20](md-images/2022-08-24%2023;53;20.PNG)



### SELECT 구문 - PSEUDO 칼럼

- PSEUDO칼럼은 가상칼럼. 실제 테이블에는 칼럼이 존재하지 않지만 쿼리에서 사용하는 데 있어서 결코 문제가 되지 않는다.
- 가장 대표적으로 얘기하는게 ORACLE은 ROWNUM과 ROWID

- ORACLE의 ROWNUM은 칼럼과 비슷한 성격의 Pseudo 칼럼으로 SQL 처리 결과 집합의 각 행에 대해 임시로 부여되는 일련번호이며, 테이블이나 결과 집합에서 원하는 만큼의 행만 가져오고 싶을 때, WHERE 절에서 행의 개수를 제한하는 용도로 사용한다.
  - `WHERE ROWNUM = 1`
  - `WHERE ROWNUM < 11`

- ROWNUM은 각 검색된 행의 일련번호로, ORDER BY 에 의한 정렬 이전에 부여된다.
- ROWID는 테이블 내의 특정한 행을 유일하게 구별해 주는 값이며, 데이터 타입은 ROWID이다.



```
SELECT ROWID, ROWNUM, ename, sal
	FROM emp;
```

![2022-08-25 00;02;23](md-images/2022-08-25%2000;02;23.PNG)



```
SELECT ename, job, sal
FROM emp
WHERE job = 'SALEMAN'
	AND rownum < 3;
```

![2022-08-25 00;03;23](md-images/2022-08-25%2000;03;23.PNG)



![2022-08-25 00;03;50](md-images/2022-08-25%2000;03;50.PNG)



## 3. INSERT 

![2022-08-25 00;05;12](md-images/2022-08-25%2000;05;12.PNG)

- col의 개수가 테이블이 가지고 있는 전체 컬럼이 되는 경우는 생략 가능.
- column의 개수와 VALUES의 개수는 같아야 함.
- col_1과 val_1, col_2과 val_2... 이렇게 위치별로 데이터 타입은 같아야함.



### INSERT - NULL 값 입력

![2022-08-25 00;08;47](md-images/2022-08-25%2000;08;47.PNG)

- (deptno, dname, loc) 부분은 전체를 나열했기에 생략가능
- 정상 동작



![2022-08-25 00;08;50](md-images/2022-08-25%2000;08;50.PNG)

- loc는 null이 입력됨



![2022-08-25 00;08;54](md-images/2022-08-25%2000;08;54.PNG)

- VALUES 마지막 칼럼에 NULL 작성



## 4. INSERT ~ SELECT

![2022-08-25 00;12;19](md-images/2022-08-25%2000;12;19.PNG)

![2022-08-25 00;12;48](md-images/2022-08-25%2000;12;48.PNG)

- (id, name) 생략 가능
- 정상적으로 동작



![2022-08-25 00;14;00](md-images/2022-08-25%2000;14;00.PNG)

- DDL을 통해서 테이블을 만들게 되면 그 데이터베이스 차원에서는 테이블 별로 로그 관리를 하도록 설정됨.
- LOGGIN 관리 여부 - YES로 되어 있음.
- LOGGIN 관리 이유 - 만에 하나라도 있을 수 있는 데이터베이스 차원에 장애가 생겼을 때 로그를 통해 그 부분을 복구하고자 활용되는 부분

- INSERT SELECT를 하는 경우에 있어서 대량의 데이터를 INSERT 하는 경우 이 로그 정보로 인해 시간적으로 다소 문제가 될 소지가 있음. 그렇기에 작업이 되는 동안은 LOGGIN을 덜 발생시키게 하고 작업이 끝나면 정상 LOGGIN 관리가 되도록 하면 해당 작업에 있어 시간을 아낄 수 있음.

- 아래와 같이 처리

![2022-08-25 00;18;53](md-images/2022-08-25%2000;18;53.PNG)



## 5. UPDATE

![2022-08-25 00;19;47](md-images/2022-08-25%2000;19;47.PNG)





![2022-08-25 00;20;01](md-images/2022-08-25%2000;20;01.PNG)

- WHERE 절 없기에 UPDATE를 하되 emp 테이블의 전체 데이터를 UPDATE.
- UPDATE하고자 하는 컬럼은 SET 다음에 적혀있음



![2022-08-25 00;20;04](md-images/2022-08-25%2000;20;04.PNG)

- WHERE절을 만족하는 데이터에 한해서만 emp 테이블에 UPDATE



## 6. SELECT 문을 이용한 UPDATE

![2022-08-25 00;22;19](md-images/2022-08-25%2000;22;19.PNG)

- SELECT 앞 주어진 = 때문이라도 SELECT문은 한 건의 데이터를 읽어들여야 함. 두 건 이상의 데이터를 읽어들이면 에러.



![2022-08-25 03;48;52](md-images/2022-08-25%2003;48;52.PNG)

- WHERE절을 만족하는 데이터에 대해서만 UPDATE
- UPDATE하고자 하는 컬럼은 SET 다음에 있음. SELECT문으로 불러들인 값으로 UPDATE
- SCOTT 데이터가 동명이인과 같은 데이터라면 에러 발생. SELECT는 1row를 읽어야 됨.



![2022-08-25 03;52;28](md-images/2022-08-25%2003;52;28.PNG)

- UPDATE하고자하는 컬럼이 2개



![2022-08-25 03;53;51](md-images/2022-08-25%2003;53;51.PNG)

- 2번 상황에서 SELECT문의 WHERE절의 조건이 같았다면 3번처럼 하나의 SELECT문으로 쓸 수 있음



## 7. DELETE

![2022-08-25 03;55;01](md-images/2022-08-25%2003;55;01.PNG)

- DELETE 뒤의 [FROM]은 생략 가능

- 조건에 만족한 데이터를 emp 테이블로부터 삭제



![2022-08-25 03;56;17](md-images/2022-08-25%2003;56;17.PNG)



![2022-08-25 03;56;56](md-images/2022-08-25%2003;56;56.PNG)



## 8. MERGE

- UPDATE + INSERT : 하나의 SQL 문으로 INSERT, UPDATE 또는 이들 두 작업을 한 번에 실행
- 하나의 목표 테이블에 입력 및 수정이 가해짐
- 데이터 존재 여부는 조인을 통해 확인



![2022-08-25 03;59;10](md-images/2022-08-25%2003;59;10.PNG)

- INTO 다음에 주어진 테이블 자체가 UPDATE나 INSERT가 가해지는 Target 테이블
- USING 다음에 table이나 view나 sub-query를 주게되면 join을 통해서 데이터가 있는지 없는지 확인하게 됨
- join 조건은 ON 다음에 기술
- join이 된다면 WHEN에 의해 조건 확인
- MATCHED - 서로간의 데이터가 있다. -> UPDATE 적용
- NOT MATCHED - Target 테이블 데이터가 없고 USING 다음에 주어진 table, view, sub-query에 있음



![2022-08-25 04;04;06](md-images/2022-08-25%2004;04;06.PNG)

- UPDATE나 INSERT를 하고 싶은 테이블은 emp_mast. 이것과 join을 맺고 싶어하는 테이블이 emp



## 9. MULTI-TABLE INSERT

- 다중 테이블 입력 - 하나의 INSERT 문으로 하나의 테이블 또는 여러 개의 테이블에 데이터를 입력



![2022-08-25 04;07;49](md-images/2022-08-25%2004;07;49.PNG)



![2022-08-25 04;08;29](md-images/2022-08-25%2004;08;29.PNG)

- INTO가 3차례 주어짐



![2022-08-25 04;09;52](md-images/2022-08-25%2004;09;52.PNG)

- INSERT문을 각각 별도로 구현



![2022-08-25 04;12;29](md-images/2022-08-25%2004;12;29.PNG)



![2022-08-25 04;14;48](md-images/2022-08-25%2004;14;48.PNG)



![2022-08-25 04;16;05](md-images/2022-08-25%2004;16;05.PNG)

- 조건부 INSERT ALL

![2022-08-25 04;17;42](md-images/2022-08-25%2004;17;42.PNG)



## 10. TRANSACTION

- 구성
  - DML(INSERT, UPDATE, DELETE)의 집합
  - DDL이나 DCL은 한 문장이 트랜잭션으로 처리됨

- 트랜잭션 정의
  - 시작
    - 명시적인 트랜잭션 시장 명령 없음 (타 DBMS와의 차이점)
    - 첫 DML이 시작되면 트랜잭션도 시작



## 11. TCL

- 명시적 트랜잭션 케어
  - COMMIT, SAVEPPOINT name, ROLLBACK



- 암시적 트랜젝선 제어
  - 자동 COMMIT/ROLLBACK



![2022-08-25 04;23;50](md-images/2022-08-25%2004;23;50.PNG)

- a라는 형태로 특정 지점을 저장. -> UPDATE 실행 -> ROLLBACK TO a -> A지점으로 되돌아감 -> 조금 전 업데이트는 취소

- a는 SAVEPOINT

- COMMIT과 SAVE POINT가 TCL

  