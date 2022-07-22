# MySQL 데이터베이스 강좌

[갖고 노는 MySQL 데이터베이스 강좌]: https://www.youtube.com/watch?v=dgpBXNa9vJc&amp;t=108s
[보조교재]: https://www.yalco.kr/lectures/sql/
[실습링크]: https://www.w3schools.com/mysql/trymysql.asp?filename=trysql_select_all



## RDBMS(Relation Database Management System)

- 데이터베이스 : 한 곳에 저장된 정보들을 원하는 어떤 곳에서든 사용할 수 있다는 것.
  - 특정 소프트웨어나 프로그램에 종속되지 않고 독립된 정보의 집합 내지 저장소.

- 데이터베이스에 정보들을 집어넣고 원하는 걸 찾아 꺼내는 등의 각종 기능들을 넣으면 데이터베이스 관리 시스템이 됨.



## SQL(Structed Query Language)

- 정보마다 정해진 양식이 있으면 여러 사람들이 데이터베이스를 공유해서 사용할 때 데이터 형태가 달라서 생기는 문제가 없음.
- 표 형태의 데이터베이스에 정보를 넣고 빼고 조작하고 사용하는데 사용되는게 구조화 질의 언어, SQL.



## Relational(관계형)

- 테이블을 나누고 각 행마다 고유값을 이용하여 테이블들의 '관계'를 맺어줌
- JOIN : 분리된 여러 테이블들을 이어주는 기능

- 얼마든지 합치고 연결할 수 있기 때문에 테이블을 효율적으로 분리할 수 있음



## 1. SELECT 전반 기능 훑어보기

## 1-1. SELECT 전반 기능 훑어보기

### 1. 테이블의 모든 내용 보기

```
SELECT * FROM Customers;
```



### 2. 원하는 column(열)만 골라서 보기

```
SELECT CustomerName FROM Customers;
```

```
SELECT CustomerName, ConatctName, Country FROM Customers;
```



- 테이블의 컬럼이 아닌 값도 선택할 수 있다.

```
SELECT CustomerName, 1. 'Hello', NULL FROM Customers;
```



### 3. 원하는 조건의 row(행)만 걸러서 보기

- WHERE 구문 뒤에 조건을 붙여 원하는 데이터만 가져올 수 있다.

```
SELECT * FROM Orders WHERE EmployeeID = '3';
```

```
SELECT * FROM OrderDetails WHERE Quantity < 5;
```



### 4. 원하는 순서로 데이터 가져오기

- ORDER BY 구문을 사용해서 특정 컬럼을 기준으로 데이터를 정렬할 수 있다.

  ```
  SELECT * FROM Customers ORDER BY ContactName;
  ```

- ASC : 오름차순, DESC : 내림차순

  ```
  SELECT * FROM OrderDetails ORDER BY ProductID ASC, Quantity DESC;
  ```



### 5. 원하는 만큼만 데이터 가져오기

- LIMIT {가져올 갯수} 또는 LIMIT {건너뛸 갯수}, {가져올 갯수}를 사용하여, 원하는 위치에서 원하는 만큼만 데이터를 가져올 수 있다. 

```
SELECT * FROM Customers
LIMIT 10;
```

```
SELECT * FROM Customers
LIMIT 0, 10;
```

```
SELECT * FROM Customers
LIMIT 30, 10;
```



### 6. 원하는 별명(alias)으로 데이터 가져오기

- AS를 사용해서 컬럼명을 변경할 수 있습니다.

```
SELECT
	CustomerId AS ID,
	CustomerName AS NAME,
	Address AS ADDR
FROM Customers;
```

```
SELECT
	CustomerId AS '아이디',
	CustomerName AS '고객명',
	Address AS '주소'
FROM Customers;
```



### 활용

```
SELECT
	CustomerID AS '아이디',
	CustomerName AS '고객명',
	City AS '도시',
	Country AS '국가'
FROM Customers
WHERE
	City = 'London' OR Country = 'Mexico'
ORDER BY CustomerName
LIMIT 0, 5;
```



## 1-2. 각종 연산자들

### 1. 사칙연산

|   연산자   |               의미                |
| :--------: | :-------------------------------: |
| +, -, *, / | 각각 더하기, 뺴기, 곱하기, 나누기 |
|   %, MOD   |              나머지               |

```
SELECT 1 + 2;
```

```
SELECT 5 - 2.5 AS DIFFERENCE;
```

```
SELECT 3 * (2 + 4) / 2, 'Hello';
```

```
SELECT 10 % 3;
```

- 문자열에 사칙연산을 가하면 0으로 인식

  ```
  SELECT 'ABC' + 3;
  ```

  ```
  SELECT 'ABC' * 3;
  ```

  ```
  SELECT '1' + '002' * 3;
  -- 숫자로 구성된 문자열은 숫자로 자동인식
  ```

  ```
  SELECT
  	OrderID + ProductID
  FROM OrderDetails;
  ```

  ```
  SELECT
  	ProductName,
  	Price / 2 AS HalfPrice
  FROM Products;
  ```

  

### 2. 참/거짓 관련 연산자

```
SELECT TRUE, FALSE;
```

```
SELECT !TRUE, NOT 1, !FALSE, NOT FALSE;
```

- MySQL에서는 TRUE는 1, FALSE는 0으로 저장된다.

  ```
  SELECT 0 = TRUE, 1 = TRUE, 0 = FALSE, 1 = FALSE;
  ```

  ```
  SELECT * FROM Customers WHERE TRUE;
  ```

  ```
  SELECT * FROM Customers WHERE FALSE;
  ```



- | 연산자 | 의미                        |
  | ------ | --------------------------- |
  | IS     | 양쪽이 모두 TRUE 또는 FALSE |
  | IS NOT | 한쪽은 TRUE, 한쪽은 FALSE   |

  ```
  SELECT TRUE IS TRUE;
  ```
  
  ```
  SELECT TRUE IS NOT FALSE;
  ```
  
  ```
  SELECT (TRUE IS FALSE) IS NOT TRUE;
  ```
  
  

- | 연산자   | 의미                         |
  | -------- | ---------------------------- |
  | AND, &&  | 양쪽이 모두 TRUE일 때만 TRUE |
  | OR, \|\| | 한쪽은 TRUE면 TRUE           |

  ```
  SELECT TRUE AND FALSE, TRUE OR FALSE;
  ```

  ```
  SELECT 2 + 3 = 6 OR 2 * 3 = 6;
  ```

  ```
  SELECT * FROM Orders
  WHERE
    CustomerId = 15 AND EmployeeId = 4;
  ```

  ```
  SELECT * FROM Products 
  WHERE
    ProductName = 'Tofu' OR CategoryId = 8;
  ```

  ```
  SELECT * FROM OrderDetails
  WHERE
    ProductId = 20
    AND (OrderId = 10514 OR Quantity = 50);
  ```



- | 연산자 | 의미                             |
  | ------ | -------------------------------- |
  | =      | 양쪽 값이 같음                   |
  | !=, <> | 양쪽 값이 다름                   |
  | >, <   | (왼쪽, 오른쪽) 값이 더 큼        |
  | >=, <= | (왼쪽, 오른쪽) 값이 같거나 더 큼 |

  ```
  SELECT 1 = 1, !(1 <> 1), NOT (1 < 2), 1 > 0 IS NOT FALSE;
  ```

  ```
  SELECT 'A' = 'A', 'A' != 'B', 'A' < 'B', 'A' > 'B';
  ```

  ```
  SELECT 'Apple' > 'Banana' OR 1 < 2 IS TRUE;
  ```

  - MySQL의 기본 사칙연산자는 대소문자 구분을 하지 않습니다.

  ```
  SELECT 'A' = 'a';
  ```

  - 테이블의 컬럼이 아닌 값으로 선택하기

  ```
  SELECT
    ProductName, Price,
    Price > 20 AS EXPENSIVE 
  FROM Products;
  ```

  ```
  SELECT
    ProductName, Price,
    NOT Price > 20 AS CHEAP 
  FROM Products;
  ```



- | 연산자                      | 의미                        |
  | --------------------------- | --------------------------- |
  | BETWEEN {MIN} AND {MAX}     | 두 값 사이에 있음           |
  | NOT BETWEEN {MIN} AND {MAX} | 두 값 사이가 아닌 곳에 있음 |

  ```
  SELECT 5 BETWEEN 1 AND 10;
  ```

  ```
  SELECT 'banana' NOT BETWEEN 'Apple' AND 'camera';
  ```

  ```
  SELECT * FROM OrderDetails
  WHERE ProductID BETWEEN 1 AND 4;
  ```

  ```
  SELECT * FROM Customers
  WHERE CustomerName BETWEEN 'b' AND 'c';
  ```



- | 연산자 | 의미                       |
  | ------ | -------------------------- |
  | IN     | 괄호 안의 값들 가운데 있음 |
  | NOT IN | 괄호 안의 값들 가운데 없음 |

  ```
  SELECT 1 + 2 IN (2, 3, 4) 
  ```

  ```
  SELECT 'Hello' IN (1, TRUE, 'hello') 
  ```

  ```
  SELECT * FROM Customers
  WHERE City IN ('Torino', 'Paris', 'Portland', 'Madrid') 
  ```



- | 연산자         | 의미                          |
  | -------------- | ----------------------------- |
  | LIKE '...%...' | 0~N개 문자를 가진 패턴        |
  | LIKE '..._...' | _ 갯수만큼의 문자를 가진 패턴 |

  ```
  SELECT
    'HELLO' LIKE 'hel%',
    'HELLO' LIKE 'H%',
    'HELLO' LIKE 'H%O',
    'HELLO' LIKE '%O',
    'HELLO' LIKE '%HELLO%',
    'HELLO' LIKE '%H',
    'HELLO' LIKE 'L%'
  ```

  ```
  SELECT
    'HELLO' LIKE 'HEL__',
    'HELLO' LIKE 'h___O',
    'HELLO' LIKE 'HE_LO',
    'HELLO' LIKE '_____',
    'HELLO' LIKE '_HELLO',
    'HELLO' LIKE 'HEL_',
    'HELLO' LIKE 'H_O'
  ```

  ```
  SELECT * FROM Employees
  WHERE Notes LIKE '%economics%'
  ```

  ```
  SELECT * FROM OrderDetails
  WHERE OrderID LIKE '1025_'
  ```



## 1-3. 숫자와 문자열을 다루는 함수들

### 1. 숫자 관련 함수들

- | 함수  | 설명   |
  | ----- | ------ |
  | ROUND | 반올림 |
  | CEIL  | 올림   |
  | FLOOR | 내림   |

  ```
  SELECT 
    ROUND(0.5),
    CEIL(0.4),
    FLOOR(0.6);
  ```

  ```
  SELECT 
    Price,
    ROUND(price),
    CEIL(price),
    FLOOR(price)
  FROM Products;
  ```



- | 함수 | 설명   |
  | ---- | ------ |
  | ABS  | 절대값 |

  ```
  SELECT ABS(1), ABS(-1), ABS(3 - 10);
  ```

  ```
  SELECT * FROM OrderDetails
  WHERE ABS(Quantity - 10) < 5;
  ```

  

- | 함수     | 설명                       |
  | -------- | -------------------------- |
  | GREATEST | (괄호 안에서) 가장 큰 값   |
  | LEAST    | (괄호 안에서) 가장 작은 값 |

  ```
  SELECT 
    GREATEST(1, 2, 3),
    LEAST(1, 2, 3, 4, 5);
  ```

  ```
  SELECT
    OrderDetailID, ProductID, Quantity,
    GREATEST(OrderDetailID, ProductID, Quantity),
    LEAST(OrderDetailID, ProductID, Quantity)
  FROM OrderDetails;
  ```



- 그룹함수 - 조건에 따라 집계된 값을 가져옵니다.

  - | 함수  | 설명               |
    | ----- | ------------------ |
    | MAX   | 가장 큰 값         |
    | MIN   | 가장 작은 값       |
    | COUNT | 갯수 (NULL값 제외) |
    | SUM   | 총합               |
    | AVG   | 평균 값            |

    ```
    SELECT
      MAX(Quantity),
      MIN(Quantity),
      COUNT(Quantity),
      SUM(Quantity),
      AVG(Quantity)
    FROM OrderDetails
    WHERE OrderDetailID BETWEEN 20 AND 30;
    ```



- | 함수                   | 설명           |
  | ---------------------- | -------------- |
  | POW(A, B), POWER(A, B) | A를 B만큼 제곱 |
  | SQRT                   | 제곱근         |

  ```
  SELECT
    POW(2, 3),
    POWER(5, 2),
    SQRT(16);
  ```

  ```
  SELECT Price, POW(Price, 1/2)
  FROM Products
  WHERE SQRT(Price) < 4;
  ```



- | 함수           | 설명                      |
  | -------------- | ------------------------- |
  | TRUNCATE(N, n) | N을 소숫점 N자리까지 선택 |

  ```
  SELECT
    TRUNCATE(1234.5678, 1),
    TRUNCATE(1234.5678, 2),
    TRUNCATE(1234.5678, 3),
    TRUNCATE(1234.5678, -1),
    TRUNCATE(1234.5678, -2),
    TRUNCATE(1234.5678, -3);
  ```

  ```
  SELECT Price FROM Products
  WHERE TRUNCATE(Price, 0) = 12;
  ```



- [더 많은 숫자 함수]: https://dev.mysql.com/doc/refman/8.0/en/numeric-functions.html



### 2. 문자열 관련 함수들

- | 함수         | 설명          |
  | ------------ | ------------- |
  | UCASE, UPPER | 모두 대문자로 |
  | LCASE, LOWER | 모두 소문자로 |

  ```
  SELECT
    UPPER('abcDEF'),
    LOWER('abcDEF');
  ```

  ```
  SELECT
    UCASE(CustomerName),
    LCASE(ContactName)
  FROM Customers;
  ```



- | 함수             | 설명                        |
  | ---------------- | --------------------------- |
  | CONCAT(...)      | 괄호 안의 내용 이어붙임     |
  | CONCAT_WS(S,...) | 괄호 안의 내용 S로 이어붙임 |

  ```
  SELECT CONCAT('HELLO', ' ', 'THIS IS ', 2021)
  ```

  ```
  SELECT CONCAT_WS('-', 2021, 8, 15, 'AM')
  ```

  ```
  SELECT CONCAT('O-ID: ', OrderID) FROM Orders;
  ```

  ```
  SELECT
    CONCAT_WS(' ', FirstName, LastName) AS FullName
  FROM Employees;
  ```



- | 함수              | 설명                         |
  | ----------------- | ---------------------------- |
  | SUBSTR, SUBSTRING | 주어진 값에 따라 문자열 자름 |
  | LEFT              | 왼쪽부터 N글자               |
  | RIGHT             | 오른쪽부터 N글자             |

  ```
  SELECT
    SUBSTR('ABCDEFG', 3),
    SUBSTR('ABCDEFG', 3, 2),
    SUBSTR('ABCDEFG', -4),
    SUBSTR('ABCDEFG', -4, 2);
  ```

  ```
  SELECT
    LEFT('ABCDEFG', 3),
    RIGHT('ABCDEFG', 3);
  ```

  ```
  SELECT
    OrderDate,
    LEFT(OrderDate, 4) AS Year,
    SUBSTR(OrderDate, 6, 2) AS Month,
    RIGHT(OrderDate, 2) AS Day
  FROM Orders;
  ```



- | 함수                          | 설명                 |
  | ----------------------------- | -------------------- |
  | LENGTH                        | 문자열의 바이트 길이 |
  | CHAR_LENGTH, CHARACTER_LENGTH | 문자열의 문자 길이   |

  ```
  SELECT
    LENGTH('ABCDE'),
    CHAR_LENGTH('ABCDE'),
    CHARACTER_LENGTH('ABCDE');
  ```

  ```
  SELECT
    LENGTH('안녕하세요'), -- 15
    CHAR_LENGTH('안녕하세요'), -- 5
    CHARACTER_LENGTH('안녕하세요'); -- 5
  ```

  

- | 함수  | 설명             |
  | ----- | ---------------- |
  | TRIM  | 양쪽 공백 제거   |
  | LTRIM | 왼쪽 공백 제거   |
  | RTRIM | 오른쪽 공백 제거 |

  ```
  SELECT
    CONCAT('|', ' HELLO ', '|'),
    CONCAT('|', LTRIM(' HELLO '), '|'),
    CONCAT('|', RTRIM(' HELLO '), '|'),
    CONCAT('|', TRIM(' HELLO '), '|');
  ```

  ```
  SELECT * FROM Categories
  WHERE CategoryName = ' Beverages '
  ```

  ```
  SELECT * FROM Categories
  WHERE CategoryName = TRIM(' Beverages ')
  ```

  

- | 함수          | 설명                               |
  | ------------- | ---------------------------------- |
  | LPAD(S, N, P) | S가 N글자가 될 때까지 P를 이어붙임 |
  | RPAD(S, N, P) | S가 N글자가 될 때까지 P를 이어붙임 |

  ```
  SELECT
    LPAD('ABC', 5, '-'),
    RPAD('ABC', 5, '-');
  ```

  ```
  SELECT
    LPAD(SupplierID, 5, 0),
    RPAD(Price, 6, 0)
  FROM Products;
  ```



- | 함수             | 설명             |
  | ---------------- | ---------------- |
  | REPLACE(S, A, B) | S중 A를 B로 변경 |

  ```
  SELECT
    REPLACE('맥도날드에서 맥도날드 햄버거를 먹었다.', '맥도날드', '버거킹');
  ```

  ```
  SELECT
    REPLACE(Description, ', ', ' and ')
  FROM Categories;
  ```



- | 함수        | 설명                            |
  | ----------- | ------------------------------- |
  | INSTR(S, s) | S중 s의 첫 위치 반환, 없을 시 0 |

  ```
  SELECT
    INSTR('ABCDE', 'ABC'),
    INSTR('ABCDE', 'BCDE'),
    INSTR('ABCDE', 'C'),
    INSTR('ABCDE', 'DE'),
    INSTR('ABCDE', 'F');
  ```

  ```
  SELECT * FROM Customers
  WHERE INSTR(CustomerName, ' ') BETWEEN 1 AND 6;
  ```



- | 함수       | 설명                  |
  | ---------- | --------------------- |
  | CAST(A, T) | A를 T 자료형으로 변환 |

  ```
  SELECT
    '01' = '1', -- 0
    CONVERT('01', DECIMAL) = CONVERT('1', DECIMAL); -- 1
  ```

  

- [더 많은 문자열 함수 보러가기]: https://dev.mysql.com/doc/refman/8.0/en/string-functions.html



## 1-4. 시간/날짜 관련 및 기타 함수들

### 1. 시간/날짜 관련 함수들

- | 함수                   | 설명                  |
  | ---------------------- | --------------------- |
  | CURRENT_DATE, CURDATE  | 현재 날짜 반환        |
  | CURRENT_TIME, CURTIME  | 현재 시간 반환        |
  | CURRENT_tIMESTAMP, NOW | 현재 시간과 날짜 반환 |

  ```
  SELECT CURDATE(), CURTIME(), NOW();
  ```



- | 함수 | 설명                    |
  | ---- | ----------------------- |
  | DATE | 문자열에 따라 날짜 생성 |
  | TIME | 문자열에 따라 시간 생성 |

  ```
  SELECT
    '2021-6-1' = '2021-06-01', -- 0
    DATE('2021-6-1') = DATE('2021-06-01'), -- 1
    '1:2:3' = '01:02:03', -- 0
    TIME('1:2:3') = TIME('01:02:03'); -- 1
  ```

  ```
  SELECT
    '2021-6-1 1:2:3' = '2021-06-01 01:02:03', -- 0
    DATE('2021-6-1 1:2:3') = DATE('2021-06-01 01:02:03'), -- 1
    TIME('2021-6-1 1:2:3') = TIME('2021-06-01 01:02:03'), -- 1
    DATE('2021-6-1 1:2:3') = TIME('2021-06-01 01:02:03'), -- 0
    DATE('2021-6-1') = DATE('2021-06-01 01:02:03'), -- 1
    TIME('2021-6-1 1:2:3') = TIME('01:02:03'); -- 1
  ```

  ```
  SELECT * FROM Orders
  WHERE
    OrderDate BETWEEN DATE('1997-1-1') AND DATE('1997-1-31');
  ```



- | 함수            | 설명                                       |
  | --------------- | ------------------------------------------ |
  | YEAR            | 주어진 DATETIME값의 년도 반환              |
  | MONTHNAME       | 주어진 DATETIME값의 월(영문) 반환          |
  | MONTH           | 주어진 DATETIME값의 월 반환                |
  | WEEKDAY         | 주어진 DATETIME값의 요일값 반환(월요일: 0) |
  | DAYNAME         | 주어진 DATETIME값의 요일명 반환            |
  | DAYOFMONTH, DAY | 주어진 DATETIME값의 날짜(일) 반환          |

  ```
  SELECT
    OrderDate,
    YEAR(OrderDate) AS YEAR,
    MONTHNAME(OrderDate) AS MONTHNAME,
    MONTH(OrderDate) AS MONTH,
    WEEKDAY(OrderDate) AS WEEKDAY,
    DAYNAME(OrderDate) AS DAYNAME,
    DAY(OrderDate) AS DAY
  FROM Orders;
  ```

  ```
  SELECT
    OrderDate,
    CONCAT(
      CONCAT_WS(
        '/',
        YEAR(OrderDate), MONTH(OrderDate), DAY(OrderDate)
      ),
      ' ',
      UPPER(LEFT(DAYNAME(OrderDate), 3))
    )
  FROM Orders;
  ```

  ```
  SELECT * FROM Orders
  WHERE WEEKDAY(OrderDate) = 0;
  ```



- | 함수   | 설명                      |
  | ------ | ------------------------- |
  | HOUR   | 주어진 DATETIME의 시 반환 |
  | MINUTE | 주어진 DATETIME의 분 반환 |
  | SECOND | 주어진 DATETIME의 초 반환 |

  ```
  SELECT
    HOUR(NOW()), MINUTE(NOW()), SECOND(NOW());
  ```



- | 함수              | 설명             |
  | ----------------- | ---------------- |
  | ADDDATE, DATE_ADD | 시간/날짜 더하기 |
  | SUBDATE, DATE_SUB | 시간/날짜 빼기   |

  ```
  SELECT 
    ADDDATE('2021-06-20', INTERVAL 1 YEAR),
    ADDDATE('2021-06-20', INTERVAL -2 MONTH),
    ADDDATE('2021-06-20', INTERVAL 3 WEEK),
    ADDDATE('2021-06-20', INTERVAL -4 DAY),
    ADDDATE('2021-06-20', INTERVAL -5 MINUTE),
    ADDDATE('2021-06-20 13:01:12', INTERVAL 6 SECOND);
  ```

  ```
  SELECT
    OrderDate,
    ADDDATE(OrderDate, INTERVAL 1 YEAR),
    ADDDATE(OrderDate, INTERVAL -2 MONTH),
    ADDDATE(OrderDate, INTERVAL 3 WEEK),
    ADDDATE(OrderDate, INTERVAL -4 DAY),
    ADDDATE(OrderDate, INTERVAL -5 MINUTE)
  FROM Orders;
  ```



- | 함수      | 설명                   |
  | --------- | ---------------------- |
  | DATE_DIFF | 두 시간/날짜 간 일수차 |
  | TIME_DIFF | 두 시간/날짜 간 시간차 |

  ```
  SELECT
    OrderDate,
    NOW(),
    DATEDIFF(OrderDate, NOW())
  FROM Orders;
  ```

  ```
  SELECT
    TIMEDIFF('2021-06-21 15:20:35', '2021-06-21 16:34:41');
  ```

  ```
  SELECT * FROM Orders
  WHERE
    ABS(DATEDIFF(OrderDate, '1996-10-10')) < 5;
  ```

  

- | 함수     | 설명                  |
  | -------- | --------------------- |
  | LAST_dAY | 해당 달의 마지막 날짜 |

  ```
  SELECT
    OrderDate,
    LAST_DAY(OrderDate),
    DAY(LAST_DAY(OrderDate)),
    DATEDIFF(LAST_DAY(OrderDate), OrderDate)
  FROM Orders;
  ```

  

- | 함수        | 설명                             |
  | ----------- | -------------------------------- |
  | DATE_FORMAT | 시간/날짜를 지정한 형식으로 반환 |

  | 형식   | 설명                 |
  | ------ | -------------------- |
  | %Y     | 년도 4자리           |
  | %y     | 년도 2자리           |
  | %M     | 월 영문              |
  | %m     | 월 숫자              |
  | %D     | 일 영문(1st, 2nd...) |
  | %d, %e | 일 숫자(01 ~ 31)     |
  | %T     | hh:mm:ss             |
  | %r     | hh:mm:ss AM/PM       |
  | %H, %k | 시 (~23)             |
  | %h, %l | 시 (~12)             |
  | %i     | 분                   |
  | %S, %s | 초                   |
  | %p     | AM/PM                |

  ```
  SELECT
    DATE_FORMAT(NOW(), '%M %D, %Y %T'),
    DATE_FORMAT(NOW(), '%y-%m-%d %h:%i:%s %p'),
    DATE_FORMAT(NOW(), '%Y년 %m월 %d일 %p %h시 %i분 %s초');
  ```

  ```
  SELECT REPLACE(
    REPLACE(
      DATE_FORMAT(NOW(), '%Y년 %m월 %d일 %p %h시 %i분 %초'),
      'AM', '오전'
    ),
    'PM', '오후'
  )
  ```



- | 함수              | 설명                                  |
  | ----------------- | ------------------------------------- |
  | STR_TO_DATE(S, F) | S를 F형식으로 해석하여 시간/날짜 생성 |

  ```
  SELECT
    DATEDIFF(
      STR_TO_DATE('2021-06-04 07:48:52', '%Y-%m-%d %T'),
      STR_TO_DATE('2021-06-01 12:30:05', '%Y-%m-%d %T')
    ),
    TIMEDIFF(
      STR_TO_DATE('2021-06-04 07:48:52', '%Y-%m-%d %T'),
      STR_TO_DATE('2021-06-01 12:30:05', '%Y-%m-%d %T')
    );
  ```

  ```
  SELECT
    OrderDate,
    DATEDIFF(
      STR_TO_DATE('1997-01-01 13:24:35', '%Y-%m-%d %T'),
      OrderDate
    ),
    TIMEDIFF(
      STR_TO_DATE('1997-01-01 13:24:35', '%Y-%m-%d %T'),
      STR_TO_DATE(CONCAT(OrderDate, ' ', '00:00:00'), '%Y-%m-%d %T')
    )
  FROM Orders;
  ```



- [더 많은 시간/날짜 함수 보러가기]: https://dev.mysql.com/doc/refman/8.0/en/string-functions.html

  

### 2. 기타 함수들

- | 형식           | 설명                               |
  | -------------- | ---------------------------------- |
  | IF(조건, T, F) | 조건이 참이라면 T, 거짓이면 F 반환 |

  ```
  SELECT IF (1 > 2, '1는 2보다 크다.', '1은 2보다 작다.');
  ```

- 보다 복잡한 조건은 CASE문을 사용합니다.

  ```
  SELECT
  CASE
    WHEN -1 > 0 THEN '-1은 양수다.'
    WHEN -1 = 0 THEN '-1은 0이다.'
    ELSE '-1은 음수다.'
  END;
  ```

  ```
  SELECT
    Price,
    IF (Price > 30, 'Expensive', 'Cheap'),
    CASE
      WHEN Price < 20 THEN '저가'
      WHEN Price BETWEEN 20 AND 30 THEN '일반'
      ELSE '고가'
    END
  FROM Products;
  ```



- | 형식         | 설명                 |
  | ------------ | -------------------- |
  | IFNULL(A, B) | A가 NULL일 시 B 출력 |

  ```
  SELECT
    IFNULL('A', 'B'),
    IFNULL(NULL, 'B');
  ```



## 1-5. 조건에 따라 그룹으로 묶기

### GROUP BY - 조건에 따라 집게된 값을 가져옵니다.

```
SELECT Country FROM Customers
GROUP BY Country;
```

```
SELECT CategoryID FROM Products
GROUP BY CategoryID;
```

- 여러 컬럼을 기준으로 그룹화할 수도 있습니다.

  ```
  SELECT 
    Country, City,
    CONCAT_WS(', ', City, Country)
  FROM Customers
  GROUP BY Country, City;
  ```

  

- 그룹 함수 활용하기

  ```
  SELECT
    COUNT(*), OrderDate
  FROM Orders
  GROUP BY OrderDate;
  ```

  ```
  SELECT
    ProductID,
    SUM(Quantity) AS QuantitySum
  FROM OrderDetails
  GROUP BY ProductID
  ORDER BY QuantitySum DESC;
  ```

  ```
  SELECT
    CategoryID,
    MAX(Price) AS MaxPrice, 
    MIN(Price) AS MinPrice,
    TRUNCATE((MAX(Price) + MIN(Price)) / 2, 2) AS MedianPrice,
    TRUNCATE(AVG(Price), 2) AS AveragePrice
  FROM Products
  GROUP BY CategoryID;
  ```

  

- WITH ROLLUP - 전체의 집계값

  ```
  SELECT
    Country, COUNT(*)
  FROM Suppliers
  GROUP BY Country
  WITH ROLLUP;
  ```

  - ORDER BY 와는 함께 사용될 수 없습니다.



- HAVING - 그룹화된 데이터 걸러내기

  ```
  SELECT
    Country, COUNT(*) AS Count
  FROM Suppliers
  GROUP BY Country
  HAVING Count >= 3;
  ```

  - WHERE는 그룹하기 전 데이터, HAVING은 그룹 후 집계에 사용합니다.

  ```
  SELECT
    COUNT(*) AS Count, OrderDate
  FROM Orders
  WHERE OrderDate > DATE('1996-12-31')
  GROUP BY OrderDate
  HAVING Count > 2;
  ```

  ```
  SELECT
    CategoryID,
    MAX(Price) AS MaxPrice, 
    MIN(Price) AS MinPrice,
    TRUNCATE((MAX(Price) + MIN(Price)) / 2, 2) AS MedianPrice,
    TRUNCATE(AVG(Price), 2) AS AveragePrice
  FROM Products
  WHERE CategoryID > 2
  GROUP BY CategoryID
  HAVING
    AveragePrice BETWEEN 20 AND 30
    AND MedianPrice < 40;
  ```

  

### 2. DISTINCT - 중복된 값들을 제거합니다.

- GROUP BY와 달리 집계함수가 사용되지 않습니다.

- GROUP BY와 달리 정렬하지 않으므로 더 빠릅니다.

  ```
  SELECT DISTINCT CategoryID
  FROM Products;
  -- 위의 GROUP BY를 사용한 쿼리와 결과 비교
  ```

  ```
  SELECT COUNT DISTINCT CategoryID
  FROM Products;
  -- 오류 발생
  ```

  ```
  SELECT DISTINCT Country
  FROM Customers
  ORDER BY Country;
  ```

  ```
  SELECT DISTINCT Country, City
  FROM Customers
  ORDER BY Country, City;
  ```



- GROUP BY와 DISTINCT 함께 활용하기

  ```
  SELECT
    Country,
    COUNT(DISTINCT CITY)
  FROM Customers
  GROUP BY Country;
  ```

  

## 2. SELECT 더 깊이 파보기

## 2-1. 쿼리 안에 서브쿼리

### 1. 비상관 서브쿼리

```
SELECT
  CategoryID, CategoryName, Description,
  (SELECT ProductName FROM Products WHERE ProductID = 1)
FROM Categories;
```

```
SELECT * FROM Products
WHERE Price < (
  SELECT AVG(Price) FROM Products
);
```

```
SELECT
  CategoryID, CategoryName, Description
FROM Categories
WHERE
  CategoryID =
  (SELECT CategoryID FROM Products
  WHERE ProductName = 'Chais');
```

```
SELECT
  CategoryID, CategoryName, Description
FROM Categories
WHERE
  CategoryID IN
  (SELECT CategoryID FROM Products
  WHERE Price > 50);
```



- | 연산자 | 의미                                     |
  | ------ | ---------------------------------------- |
  | ~ALL   | 서브쿼리의 모든 결과에 대해 ~하다        |
  | ~ANY   | 서브쿼리의 하나 이상의 결과에 대해 ~하다 |

  ```
  SELECT * FROM Products
  WHERE Price > ALL (
    SELECT Price FROM Products
    WHERE CategoryID = 2
  );
  ```

  ```
  SELECT
    CategoryID, CategoryName, Description
  FROM Categories
  WHERE
    CategoryID = ANY
    (SELECT CategoryID FROM Products
    WHERE Price > 50);
  ```

  

### 2. 상관 서브쿼리

```
SELECT
  ProductID, ProductName,
  (
    SELECT CategoryName FROM Categories C
    WHERE C.CategoryID = P.CategoryID
  ) AS CategoryName
FROM Products P;
```

```
SELECT
  SupplierName, Country, City,
  (
    SELECT COUNT(*) FROM Customers C
    WHERE C.Country = S.Country
  ) AS CustomersInTheCountry,
  (
    SELECT COUNT(*) FROM Customers C
    WHERE C.Country = S.Country 
      AND C.City = S.City
  ) AS CustomersInTheCity
FROM Suppliers S;
```

```
SELECT
  CategoryID, CategoryName,
  (
    SELECT MAX(Price) FROM Products P
    WHERE P.CategoryID = C.CategoryID
  ) AS MaximumPrice,
  (
    SELECT AVG(Price) FROM Products P
    WHERE P.CategoryID = C.CategoryID
  ) AS AveragePrice
FROM Categories C;
```

```
SELECT
  ProductID, ProductName, CategoryID, Price
  -- ,(SELECT AVG(Price) FROM Products P2
  -- WHERE P2.CategoryID = P1.CategoryID)
FROM Products P1
WHERE Price < (
  SELECT AVG(Price) FROM Products P2
  WHERE P2.CategoryID = P1.CategoryID
);
```



- EXISTS / NOT EXISTS 연산자

  ```
  SELECT
    CategoryID, CategoryName
    -- ,(SELECT MAX(P.Price) FROM Products P
    -- WHERE P.CategoryID = C.CategoryID
    -- ) AS MaxPrice
  FROM Categories C
  WHERE EXISTS (
    SELECT * FROM Products P
    WHERE P.CategoryID = C.CategoryID
    AND P.Price > 80
  );
  ```

  



## 2-2. JOIN - 여러 테이블 조립하기

### 1. JOIN(INNER JOIN) - 내부 조인

- 양쪽 모두에 값이 있는 행(NOT NULL) 반환

- 'INNER'는 선택사항

  ```
  SELECT * FROM Categories C
  JOIN Products P 
    ON C.CategoryID = P.CategoryID; 
  ```

  ```
  SELECT C.CategoryID, C.CategoryName, P.ProductName
  FROM Categories C
  JOIN Products P 
    ON C.CategoryID = P.CategoryID; 
  
  -- ambiguous 주의!
  ```

  ```
  SELECT
    CONCAT(
      P.ProductName, ' by ', S.SupplierName
    ) AS Product,
    S.Phone, P.Price
  FROM Products P
  JOIN Suppliers S
    ON P.SupplierID = S.SupplierID
  WHERE Price > 50
  ORDER BY ProductName;
  ```



- 여러 테이블을 JOIN 팔 수 있습니다.

  ```
  SELECT 
    C.CategoryID, C.CategoryName, 
    P.ProductName, 
    O.OrderDate,
    D.Quantity
  FROM Categories C
  JOIN Products P 
    ON C.CategoryID = P.CategoryID
  JOIN OrderDetails D
    ON P.ProductID = D.ProductID
  JOIN Orders O
    ON O.OrderID = D.OrderID;
  ```

- JOIN한 테이블 GROUP하기

  ```
  SELECT 
    C.CategoryName,
    MIN(O.OrderDate) AS FirstOrder,
    MAX(O.OrderDate) AS LastOrder,
    SUM(D.Quantity) AS TotalQuantity
  FROM Categories C
  JOIN Products P 
    ON C.CategoryID = P.CategoryID
  JOIN OrderDetails D
    ON P.ProductID = D.ProductID
  JOIN Orders O
    ON O.OrderID = D.OrderID
  GROUP BY C.CategoryID;
  ```

  ```
  SELECT 
    C.CategoryName, P.ProductName,
    MIN(O.OrderDate) AS FirstOrder,
    MAX(O.OrderDate) AS LastOrder,
    SUM(D.Quantity) AS TotalQuantity
  FROM Categories C
  JOIN Products P 
    ON C.CategoryID = P.CategoryID
  JOIN OrderDetails D
    ON P.ProductID = D.ProductID
  JOIN Orders O
    ON O.OrderID = D.OrderID
  GROUP BY C.CategoryID, P.ProductID;
  ```



- SELF JOIN - 같은 테이블끼리

  ```
  SELECT
    E1.EmployeeID, CONCAT_WS(' ', E1.FirstName, E1.LastName) AS Employee,
    E2.EmployeeID, CONCAT_WS(' ', E2.FirstName, E2.LastName) AS NextEmployee
  FROM Employees E1 JOIN Employees E2
  ON E1.EmployeeID + 1 = E2.EmployeeID;
  ```

  

### 2. LEFT/RIGHT OUTER JOIN - 외부 조인

- 반대쪽에 데이터가 있든 없든(NULL), 선택된 방향에 있으면 출력 - 행 수 결정

- 'OUTER'는 선택사항

  ```
  SELECT
    E1.EmployeeID, CONCAT_WS(' ', E1.FirstName, E1.LastName) AS Employee,
    E2.EmployeeID, CONCAT_WS(' ', E2.FirstName, E2.LastName) AS NextEmployee
  FROM Employees E1
  LEFT JOIN Employees E2
  ON E1.EmployeeID + 1 = E2.EmployeeID
  ORDER BY E1.EmployeeID;
  ```

  ```
  SELECT
    C.CustomerName, S.SupplierName,
    C.City, C.Country
  FROM Customers C
  LEFT JOIN Suppliers S
  ON C.City = S.City AND C.Country = S.Country;
  ```

  ```
  SELECT
    IFNULL(C.CustomerName, '-- NO CUSTOMER --'),
    IFNULL(S.SupplierName, '-- NO SUPPLIER --'),
    IFNULL(C.City, S.City),
    IFNULL(C.Country, S.Country)
  FROM Customers C
  LEFT JOIN Suppliers S
  ON C.City = S.City AND C.Country = S.Country;
  ```

  

### 3. CROSS JOIN - 교차 조인

- 조건 없이 모든 조합 반환(A*B)

  ```
  SELECT
    E1.LastName, E2.FirstName
  FROM Employees E1
  CROSS JOIN Employees E2
  ORDER BY E1.EmployeeID;
  ```

  

## 2-3. UNION - 집합으로 다루기

- | 연산자    | 설명                      |
  | --------- | ------------------------- |
  | UNION     | 중복을 제거한 집합        |
  | UNION ALL | 중복을 제거하지 않은 집합 |

  ```
  SELECT CustomerName AS Name, City, Country, 'CUSTOMER'
  FROM Customers
  UNION
  SELECT SupplierName AS Name, City, Country, 'SUPPLIER'
  FROM Suppliers
  ORDER BY Name;
  ```

  

- 합집합

  ```
  SELECT CategoryID AS ID FROM Categories
  WHERE CategoryID > 4
  UNION
  SELECT EmployeeID AS ID FROM Employees
  WHERE EmployeeID % 2 = 0;
  ```

  

- 교집합

  ```
  SELECT CategoryID AS ID
  FROM Categories C, Employees E
  WHERE 
    C.CategoryID > 4
    AND E.EmployeeID % 2 = 0
    AND C.CategoryID = E.EmployeeID;
  ```



- 차집합

  ```
  SELECT CategoryID AS ID
  FROM Categories
  WHERE 
    CategoryID > 4
    AND CategoryID NOT IN (
      SELECT EmployeeID
      FROM Employees
      WHERE EmployeeID % 2 = 0
    );
  ```

  

- 대칭차집합

  ```
  SELECT ID FROM (
    SELECT CategoryID AS ID FROM Categories
    WHERE CategoryID > 4
    UNION ALL
    SELECT EmployeeID AS ID FROM Employees
    WHERE EmployeeID % 2 = 0
  ) AS Temp 
  GROUP BY ID HAVING COUNT(*) = 1;
  ```

  