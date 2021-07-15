# python의 문법

1. 저장
2. 조건(if)
3. 반복(while)



## 무엇을 저장하는가 (박스 내용)

1. 숫자

* 현실세계에 존재하는 모든 숫자. (글자들어가면 X)
* 기본적인 연산가능. (계산기)
* int 정수, float 실수, complex 복소수



2. 글자

* 현실세계에 존재하는 모든 글자.
* 따옴표로 둘러싼 글자 or 숫자



3. True, False

* 조건 반복에 사용됨.



4. 비교

* 58 vs '58' : 숫자vs글자
* print(hello) vs print('hello') : hello 변수에 담긴 내용 출력 vs 'hello'라는 글자를 출력 



## 어떻게 저장하는가(박스종류)

1. 변수 (variable)

* 숫자, 글자, 참, 거짓 다 담을 수 있음.

```
dust = 58
print(dust)
```



2. 리스트(list)

* 박스의 리스트. 박스가 순서대로 여러개가 붙어있다.
* 0부터 시작

```
dust = [58, 40, 70]
print(dust[1])
```



3. 딕셔너리(dictionary)

* 견출에 붙인 박스들의 묶음.

```
dust = {'영등포구' : 58, '강남구' : 40}
print(dust['영등포구'])
```



## 조건

> if True :
>
> print('조건문입니다.')

```
if dust > 50:
	print('50초과')
else:
	prinmt('50이하')
```

> 조건 if / elif / else

```
# 미세먼지 농도 150보다 크면 등급은 매우나쁨
if dust > 150:
	print('매우나쁨')
# 미세먼지 농도가 150 이하 80초과면 등급은 나쁨
elif dust > 80:
	print('나쁨')
# 미세먼지 농도가 80이하 30 초과면 등급은 보통
elif dust > 30:
    print('매우나쁨')
# 미세먼지 농도가 30 이하면 등급은 좋음
else:
	print('좋음')
```



## 반복

1. while

```
while True:
    print('계속해주세요.')
```

2. for

```
for i in List:
    print('정해진 범위 안에서 계속')
```

3. while 조건: vs for i in List:
   * while : 조건이 True인 동안 반복적으로 실행 되기에 종료조건이 반드시 필요
   * for : 정해진 범위를 반복하기에 종료조건이 필요없음 

### 실습

1. 인사하기

```python
print('안녕하세요!!!')
```

2. 여러번 인사하기 - 3번 반복

```python
i=0
while < 3:
  print('안녕하세요!!!')
  i += 1
for i in range(3):
  print('안녕하세요')
for i in (1, 2, 3):
  print('안녕하세요')
```

4. lunch_box 길이만큼 반복

```python
for i in range(len(lunch_box)):
	print(lunch_box[i])
```

5. 리스트 모두 반복하기

```python
lunch = ['덮밥', '돈까스', '제육쌈밥']
for lunch in lunch_box:
	print(lunch)
```



## python 내장함수

1. print(hi!)
2. abs(-3) -> 3
3.  len(hi!) -> 2



## Python Module - random

1. 모듈활용

* 함수가  포함된 코드를 불러온다.(import)
* 함수를 사용한다.

2. import random

* random.choice()
* random.sample()



### sample.choice(List)

> 리스트에서 임의로 하나의 요소를 선택

```
# 점심메뉴 추천
menu = ['회덮밥', '제육쌈밥', '돈까스']
# 1. random 모듈을 가져온다.
import random
# 2. menu에서 하나를 선택하여 변수에 저장한다.
choice = random.choice(menu)
# 출력해본다.
print(choice)
# 앞에 단어 추가해서 출력 print("메뉴 : " + choice)
```



### random.sample(List,개수)

> 리스트에서 특정수의 요호를 임의적으로 비복원추출

```
# 로또번호 선택
# 아래에 코드를 작성하세요.

# 1. 필요한 모듈을 불러오세요.
import random
# 2. 1~45까지 숫자를 numbers에 저장하세요.
numbers = range(1, 46)
# 3. numbers 중에 6개의 숫자를 뽑아 lucky에 저장하세요.
lucky = random.sample(numbers, 6)
# 4. lucky를 출력하세요.
print(sorted(lucky))
```





## 그외 실습

1. 각오

```python
print('싸피에 열정을 불사지르자')
```
