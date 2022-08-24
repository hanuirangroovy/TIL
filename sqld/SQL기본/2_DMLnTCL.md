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



### SELECT 구문 - Pseudo 칼럼

- ORACLE의 ROWNUM은 칼럼과 비슷한 성격의 Pseudo 칼럼으로 SQL 처리 결과 집합의 각 행에 대해 임시로 부여되는 일련번호이며, 테이블이나 결과 집합에서 원하는 만큼의 행만 가져오고 싶을 때, WHERE 절에서 행의 개수를 제한하는 용도로 사용한다.



## 3. INSERT



## 4. INSERT ~ SELECT



## 5. UPDATE



## 6. SELECT 문을 이용한 UPDATE



## 7. DELETE



## 8. MERGE



## 9. MULTI-TABLE INSERT



## 10. TRANSACTION



## 11. TCL



