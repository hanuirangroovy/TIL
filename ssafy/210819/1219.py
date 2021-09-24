import sys
sys.stdin = open(f'input_1219.txt', "r")

#goal에 도달하면 1을 return하고 아니면 0을 return하는 함수
def dfs(v):
    visited = [False] *100
    ST = [v]
    visited[v] = True
    
    while ST:
        k = ST(-1)
        if k == 99:
            return 1
        for w in range(100):
            if GR[k][i] and  not visited[w]: 
                ST.append(w)
                visited[w] = True
                break
        else:
            ST.pop()
    return 0

TC, E = map(int, input().split())
GR = [[] for _ in range(100)]

lst = list(map(int, input().split()))

for tc in range(1, TC+1):
    for i in range(E):
        v1, v2 = lst[2*i], lst[2*i+1] 
        GR[v1].append(v2)


    print('#{} {}'.format(tc, dfs(0)))