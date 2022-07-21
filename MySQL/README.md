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

  