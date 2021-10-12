# DFS/BFS

참고 : https://www.youtube.com/watch?v=7C9RgOcvkvo

## 그래프 탐색 알고리즘 : DFS/BFS

- 탐색(Search)이란 많은 양의 데이터 중에서 원하는 데이터를 찾는 과정
- 대표적으로 DFS / BFS
- DFS / BFS는 코딩 테스트에서 자주 등장하는 유형!! 반드시 숙지!!



## 스택 자료구조

- 먼저 들어 온 데이터가 나중에 나가는 형식(선입후출)의 자료구조
- 입구와 출구가 동일한 형태로 스택을 시각화할 수 있음

```
stack = []

#삽입(5) - 삽입(2) - 삭제()
stack.append(5)
stack.append(2)
stack.pop()

print(stack[::-1]) #최상단 원소부터 출력
print(stack) #최하단 원소부터 출력
```



## 큐 자료구조

- 먼저 들어 온 데이터가 먼저 나가는 형식(선입선출)의 자료구조
- 큐는 입구와 출구가 모두 뚫려 있는 터널과 같은 형태로 시각화 할 수 있음

```
from collections import deque 
#단순히 리스트 자료로 할 수 있으나 시간복잡도 높아 비효율

# 큐(queue) 구현을 위해 deque 라이브러리 사용
queue = deque()

#삽입(5) - 삽입(2) - 삭제()
queue.append(5)
queue.append(2)
queue.popleft()

print(queue) #먼저 들어온 순서대로 출력
queue.reverse() #역순으로 바꾸기
print(queue) #나중에 들어온 원소부터 출력
```





## 재귀함수

- 재귀함수는 자기 자신을 다시 호출하는 함수

- 재귀함수의 종료 조건

  - 재귀 함수를 문제풀이에서 사용할 때는 재귀 함수의 종료조건을 반드시 명시해야 함

  - 종료조건을 제대로 명시하지 않으면 함수가 무한히 호출될 수 있음

  - ```
    def recursive_fuction(i):
    	#100번째 호출을 했을 때 종료되도록 종료 조건 명시
    	if i == 100:
    		return
    	print(i, '번째 재귀함수에서', i+1, '번째 재귀함수를 호출합니다.')
    recursive_fuction(1)
    ```

  - 팩토리얼 구현 예제

    - n! = 1 * 2 * ... * (n-1) * n

    ```
    #반복적으로 구현한 n!
    def factorial_iterative(n):
    	result = 1
    	#1부터 n까지의 수를 차례대로 곱하기
    	for i in range(1,n+1):
    		result *= i
    	return result
    	
    #재귀적으로 구현한 n!
    def factorial_recursive(n):
    	if n<= 1:   #n이 1이하인 경우 1을 반환
    		return 1
    	# n! = n*(n-1)!를 그대로 코드로 작성하기
    	return n*factorial_recursive(n-1)
    #각각의 방식으로 구현한 n!
    print('반복적으로 구현',factorial_iterative(5))
    print('재귀적으로 구현',factorial_recursive(5))
    ```

- 최대공약수 계산 (유클리드 호제법) 예제

  - 두 개의 자연수에 대한 최대공약수를 구하는 대표적인 알고리즘으로 유클리드 호제법이 있음

  - 유클리드 호제법

    - 두 자연수 A, B에 대하여 (A>B)  A를 B로 나눈 나머지를 R이라고 함

    - 이때 A와 B의 최대공약수는 B와 R의 최대공약수와 같음

    - ```
      def gcd(a,b):
      	if a%b == 0:
      		return b
          else:
          	return gcd(b, a%b)
      print(gcd(192,162))
      ```

    - 

  - 유클리드 호제법의 아이디어를 그대로 재귀 함수로 작성할 수 있음

- 재귀 함수 사용의 유의 사항
  - 재귀 함수를 잘 활용하면 복잡한 알고리즘을 간결하게 작성할 수 있음
    - 단, 오히려 다른 사람이 이해하기 어려운 형태의 코드가 될 수도 있으므로 신중하게 사용해야 함
  - 모든 재귀 함수는 반복문을 이용하여 동일한 기능을 구현할 수 있음
  - 재귀 함수가 반복문보다 유리한 경우도 불리한 경우도 있음
  - 컴퓨터가 함수를 연속적으로 호출하면 컴퓨터 메모리 내부의 스택 프레임에 쌓임
    - 스택을 사용해야 할 때 구현상 스택 라이브러리 대신에 재귀 함수를 이용하는 경우가 많음



## DFS (Depth-First Search)

-  DFS는 깊이 우선 탐색이라고 부르며 그래프에서 깊은 부분을 우선적으로 탐색하는 알고리즘
- DFS는 스택 자료구조(혹은 재귀 함수)를 이용하며, 구체적인 동작 과정을 다음과 같음
  - 탐색 시작 노드를 스택에 삽입하고 방문 처리를 함
  - 스택의 초상단 노드에 방문하지 않은 인접한 노드가 하나라도 있으면 그 노드를 스택에 넣고 방문처리함. 방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 꺼냄.
  - 더 이상 2번의 과정을 수행할 수 없을 때까지 반복

```
#DFS 메서드 정의
def dfs(graph, v, visited):
	#현재 노드를 방문 처리
	visited[v] = True
	print(v, end=' ')
	#현재 노드와 연결된 다른 노드를 재귀적으로 방문
	for i in graph[v]:
		if not visited[i]:
		dfs(graph, i, visited)
		
#각 노드가 방문된 정보를 표현(1차원 리스트)
visited = [False]*9
#정의된 DFS 함수 호출
dfs(graph,1,visited)
```



## BFS (Breadth-First Search)

- BFS는 너비 우선 탐색이라고도 부르며, 그래프에서 가까운 노드부터 우선적으로 탐색하는 알고리즘
- BFS는 큐 자료구조를 이용하며, 구체적인 동작 과정은 다음과 같음
  - 탐색 시작 노드를 큐에 삽입하고 방문 처리를 함
  - 큐에서 노드를 꺼낸 뒤에 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문처리함
  - 더 이상 2번의 과정을 수행할 수 없을때까지 반복

```
from collections import deque

#BFS 메서드 정의
def bfs(graph, start, visited):
	#큐(Queue) 구현을 위해 deque 라이브러리 사용
	queue = deque([start])
	#현재 노드르르 방문 처리
	visited[start] = True
	#큐가 빌 떄까지 반복
	while queue:
		#큐에서 하나의 원소를 뽑아 출력하기
		v = queue..popleft()
		print(v, end=' ')
		#아직 방문하지 않은 인접한 원소들을 큐에 삽입
		for i in graph[v]:
			if not visited[i]:
				queue.append(i)
				visited[i] = True
				
#각 노드가 방문된 정보를 표현 (1차원 리스트)
visited - [False] * 9
#정의된 BFS 함수 호출
bfs(graph,1,visited)
```



