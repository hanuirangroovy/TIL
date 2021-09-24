import sys
sys.stdin = open(f'input_4871.txt', "r")

#goal에 도달하면 1을 return하고 아니면 0을 return하는 함수
def dfs(v):
    ST = []
    visited = [False] * (V+1)

    visited[v] = True
    ST.append(v)
    while ST:
        v = ST.pop(-1)
        #print(v)
        if v == G:
            return 1
        for w in GR[v]:
            if visited[w] == False:
                ST.append(w)
                visited[w] = True
    return 0

TC = int(input())
#TC = 1
for tc in range(1, TC+1):
    V, E = map(int, input().split())
    GR = [[] for _ in range(V+1)]

    for i in range(E):
        v1, v2 = map(int, input().split()) 
        GR[v1].append(v2)

    S, G = map(int, input().split())
    print('#{} {}'.format(tc, dfs(S)))