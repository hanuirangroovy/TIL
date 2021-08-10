# 알고리즘

1. 파이참 이용.
2. 작성 후 우클릭 > Run 메뉴 클릭.
3. 디버깅 이용하면 출력하지 않고도 내용 볼 수 있음.
4. map 
5. int => 실행시킬 method
6. input().split => iterable, 순서 정해진 애들 => 1, 2, 3, 4, 5 따로 따로 입력.



## 버블정렬

```
A = list(map(int, input.split()))
```

```
N = int(input())
A = list(map(int, input.split()))
```

이렇게 형태가 되는 이유 = c+, c++에서 숫자를 하나씩 읽기에



i

| 0    | 1    | 2    | 3    | 4    |
| ---- | ---- | ---- | ---- | ---- |

A 

| 7    | 3    | 2    | 4    | 5    |
| ---- | ---- | ---- | ---- | ---- |

최대값 : 찾는 범위 i = 0 -> 4(N-1)

for i = 0-> N-1  (N=5)

if A[i] > maxV    => maxV 초기값 필요

maxV=0 => 0보다 작은 게 없다는 보장이 있어야 쓸 수 있음.

가장 작은 수로 추정되는 수로 하던지, 모른다면 가장 앞에 있는 수를 가장 작다고 가정.

float infinity (import math; math.inf ) 쓰면 안됨, 너무 늦어짐.

maxV = A[0] 으로 시작.

maxV  (값을 찾을 때) 

maxIdx (위치, 인덱스를 찾을 때)



## 카운팅 정렬





## 탐욕 알고리즘의 예

i

| 0    | 1    | 2    | 3    | 4    | 5    |
| ---- | ---- | ---- | ---- | ---- | ---- |

data

| 4    | 4    | 4    | 3    | 4    | 5    |
| ---- | ---- | ---- | ---- | ---- | ---- |

counts 만들기 위한 범위

counts = [0]*10

for i = 0 -> 5

counts(data[i])++



for i = 0-> 7  (i = Run인지 보는 첫원소)

if  counts[i] >= 1 and counts[i+1] >= 1 and counts[i+2] >= 1

Run++



counts = list(map(int,input()))



