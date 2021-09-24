# array 2

배열 : 2차 배열



## 2차원 배열의 접근



```
N, M = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(N)] 
# _ :의미 없이 단순 반복, 변수굳이 필요X

print(arr)
```

입력

```
23
123
456
```

출력

```
[(1, 2, 3)(4, 5, 6)]
```



- 2차원배열 디버거로 보면 행별로 풀어서 볼 수 있음.



비어있는 2차원 배열 (N,M) => 0으로 채워진.

```
arr2 = [[0]] * M for _ in range(N)] 
print(arr2)
```

입력

```
2 3
```

출력

```
([0, 0, 0], [0, 0, 0])
```



주의사항

```
arr2 = ([0]*M)*N  #사용 불가
```

-  원하는 건 list 2개 만드는 것인데 이렇게 하면 list는 하나만 만들어지고 가리키는 애가 두 개 만들어짐.



비교

```
arr2 = [[0]] * M for _ in range(N)]
arr2 [0][1] = 10
print(arr2)
```

```
[(0, 10, 0), (0, 0, 0)]
```



```
arr2 = ([0]*M)*N
arr2 [0][1] = 10
print(arr2)
```

```
[(0, 10, 0), (0, 10, 0)]
```



## 2차원 배열의 접근

- 배열순회

- 행 우선 순회

```
arr = [list(map(int, input().split())) for _ in range(N)]
print(len(arr))
print(len(arr[0]))
```

```
2
3
```

- 열 우선 순회

  ex) 각 열의 합 중 최대값 구하기 : 열 고정하고 행의 값 비교

- 지그재그 순회 
  - 짝수형 ->  홀수형 <-

```
for i : 0 -> N:
	if i%2 == 0:
		for j : 0 -> M-1
	else:
		for j : M-1 -> 0
```



- 델타를 이용한 2차 배열 탐색

  |                   | (3번 방향) -1, j  |                   |
  | :---------------: | :---------------: | :---------------: |
  | (2번 방향) i. j-1 |      (i, j)       | (0번 방향) i, i+1 |
  |                   | (1번 방향) i+1, j |                   |

  di = [0, 1, 0, -1]

  dj = [1, 0, -1, 0]

  

  ```
  di = [0, 1, 0, -1]
  dj = [1, 0, -1, 0]
  
  for i in range(N):
  	for j in range(M):
  		for k in range(4):
  			ni = i + di[k]
  			nj = j + dj[k]
  			arr[ni][nj]
  			if 0<= ni < N and 0 <= nj < M: #우리가 사용할 영역을 벗어나나
  				arr[ni][nj]
  				
  for i in range(N):   
  	for j in range(M):
  		for dr, dc in [[0, 1], [1, 0], [0, -1], [-1, 0]]:
  			ni = i +dr
  			nj = j +dc
  			if 0<= ni < N and 0 <= nj < M:
  				arr[ni][nj]	
  ```

  - 모든 칸에 접근하려고 함 => i, j 접근 만듦. => 모든 칸 주변에 접근하려고 함.

    =>모든 칸에 좌표를 계산하고 주변 칸의 좌표 계산.

  - 주변 칸이 4방향이 다있을 수도 있고 3방향만 있을 수도 있고.....

  - 주변 칸 : 8개 방향으로 접근

    |        | -1, j  |             |
    | :----: | :----: | :---------: |
    | i. j-1 | (i, j) |   i, i+1    |
    |        | i+1, j | i + 1,  j+1 |

    

- 전치행렬 : 대각선 기준으로 대칭되게 자리 옮김.
  - i=j 영역을 기준으로 대각선 오른쪽은 i  <  j, 왼쪽은 i > j



- 부분집합 합 문제



- 부분집합 생성하기

  - ex) {1, 2, 3, 4} => 2 * 2 * 2 * 2 = 16가지 
  - ex) {} => 0 * 0 * 0 * 0  => 아무것도 포함되지 않는 경우 ,포함되지 않으면 0
  - ex) {4} => 0 * 0 * 0 * 1

  ```
  arr = [1, 2, 3, 4]
  bit = [0, 0, 0, 0]
  for i in range(2):
  	bit[0] = i
  	for j in range(2):
  		bit[1] = j
  		for k in range(2):
  			bit[2] = k
  			for l in range(2):
  				bit[3] = l
  				for p in range(4):
  					if bit[p]:
  						print(arr[p], end = ' ')
                  print()
  ```

  ```
  
  4
  3
  34
  2
  24
  23
  234
  1
  14
  13
  134
  12
  124
  123
  1234
  ```

  

  - 어떻게 연결되는지 궁금하다면?

  ```
  arr = [1, 2, 3, 4]
  bit = [0, 0, 0, 0]
  for i in range(2):
  	bit[0] = i
  	for j in range(2):
  		bit[1] = j
  		for k in range(2):
  			bit[2] = k
  			for l in range(2):
  				bit[3] = l
  				print(bit, end = ' ')
  				for p in range(4):
  					if bit[p]:
  						print(arr[p], end = ' ')
                  print()
  ```

  ```
  [(0, 0, 0, 0)]
  [(0, 0, 0, 1)] 4
  [(0, 0, 1, 0)] 3
  [(0, 0, 1, 1)] 3 4
  [(0, 1, 0, 0)] 2
  [(0, 1, 0, 1)] 2 4
  [(0, 1, 1, 0)] 2 3
  [(0, 1, 1, 1)] 2 3 4
  [(1, 0, 0, 0)] 1
  [(1, 0, 0, 1)] 1 4
  [(1, 0, 1, 0)] 1 3
  [(1, 0, 1, 1)] 1 3 4
  [(1, 1, 0, 0)] 1 2
  ```




- 비트 연산자

  - bit : 정보를 구분할 수 있는 최소 단위. 0, 1.

  - byte : 주소 배정 단계

  - a = 1000  <= 4개의 byte

  - [0, 0, 0, 0] <= 하나당 4 byte

  - 16가지 경우(0 ~ 15) -> 비트연산자를 통해 비트를 검사. 

    ex) 0 0 0 0 -> 0, 0 0 0 1 -> 1, 1 1 1 1 -> 15 

  - 공집합 제외하려면 i를 1부터 가면 됨.

- 검색
  - 찾고자 하는 것 = 키

- 정렬되어 있지 않은 경우

  ```
  def search(A, N, key):
  	for i : 0 -> N - 1:
  		if A[i] == key:
  			retur i  # return true
          return -1 # return false <= 실패한 상태 for문 종료
  ```

  

- 정렬되어 있는 경우

  - 구현 예

    ```
    for i : 0 -> n - 1:
    	if a[i] == key:
    		return i
        elif a[i] > key:
        	return -1
    return -1
    ```

  

- 이진 검색 알고리즘

```
def binarySearch(a, key):
	start = 0
	end = len(a) - 1   #type: int
	while start <= end :
		middle = (start + end) // 2
		if a[middle] == key :  #검색 성공
			return middle
		elif a[middle] > key:
			end = middle - 1
		else:
			start = middle + 1
	return -1  # 검색 실패
	
arr = 2, 4, 7, 9, 11, 19, 23]  # arr : <class 'list'>: [2, 4, 7, 9, 11, 19, 23]
print(binarySearch(arr, 11))
print(binarySearch(arr, 10))
```

```
4
-1
```



- 선택 정렬

  1. 최소값 찾기

  ```N
  minIdx = 0  #누가 제일 작은 지 모르니
  for i : 1 -> N-1
  	if A[i] < A[minIdx]   #배열 A로 설정
  	minIdx <- i
  ```

  2. 리스트의 맨 앞에 위치한 값과 교환한다.

  3. 미정렬 최소값을 찾는다.
  4. 리스트의맨 앞에 위치한 값과 교환한다.

  ```
  for i:0 -> N-3  # 구간 시작
  	minIdx <- i
  	for j:i+1 -> N-1 #구간 시작 시작 위치 계속 변함.
  		if A[minIdx] > A[j]
  			minIdx <- j
      A[i] <-> A[minIdx]
  ```

  5. 미정렬 리스트에서 최소값을 찾는다.
  6. 리스트의 맨 앞에 위치한 값과 교환한다.

  

- 선택 정렬 알고리즘

  ```
  def selectionSort(a):
  	for i in range(0, len(a)-1): #작업구간의 시작
  		min = i   # 맨 앞을 제일 작다고 가정
  		for j in range(i+1, len(a)) :
  			if a[min] > a[j]:
  				min  = j
  		a[i], a[min] = a[min], a[i]
  ```

  

## 비트연산

MSB(높은 자리)                                                                                                                                    LSB(낮은 자리)

​             b7                b6                  b5                  b4                   b3                   b2                   b1                  b0

|  0   |  0   |  0   |  0   |  0   |  0   |  0   |  0   |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |

1. |      |  &   |  \|  |  ^   |
   | :--: | :--: | :--: | :--: |
   | 0  0 |  0   |  0   |  0   |
   | 0  1 |  0   |  1   |  1   |
   | 1  0 |  0   |  1   |  1   |
   | 1  1 |  1   |  1   |  0   |

   

2.    b1  b2  b3  b4

   a  0    1     0     1

   b  0    1     1     1

​       &  0    1     0     1



3.   b1  b2  b3  b4   => b3 자리만 1이 되게 하고싶음.

   a  0    1     0     1

   b                           => 0010 만들어주고 or 연산. or 연산은 특정비트를 1로 만드는 연산에 활용.

​       |  0    1     1     1

4.  b1  b2  b3  b4   

   a  0    1     0     1 => b2 자리만 1이 되게 하고 싶음.

   b                            => 1110 만들어주고 and 연산. and 연산은  특정 비트를 0으로 만드는 연산에 활용

​       &  0    1     1     1





- Hint

  - dir += 1, dir  = (dir + 1) % 4 => 0, 1, 2, 3

  - cnt = 1, cnt를 쓸 칸의 좌표. ni, nj = i + di[k], j + di[k]

  - ni, nj가 영역 내부이면서 arr[ni] [nj] == 0  #숫자가 써진 적이 없어야

  - 위 조건을 만족하지 않으면 k = (k+1)%4

  - 만족하면 arr[ni] [nj] = cnt,  i, j = ni,nj

  - ```
    di = [0, 1, 0, -1]
    dj = [1, 0, -1, 0]
    
    N = 5
    cnt = 1
    i, j = 0, -1
    k = 0
    while cnt <= N*N:   # ni, nj에 cnt를 쓰려고 함. 유효한 범위인가?
    	ni, nj = i+di[k], j+dj[k]
    	if ni, nj가 유효하고 and A[ni][nj] == 0
    		A [ni][nj] = cnt
    		cnt += 1
    		i, j = ni, nj
    	else
    		k = (k+1) % 4
    ```

    
    