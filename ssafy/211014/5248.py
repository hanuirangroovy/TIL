import sys
sys.stdin = open("input_5248.txt","r")

def dfs(curV):
    visited[curV] = True

    for newV in G[curV]:
        if not visited[newV]:
            dfs(newV)

# def find_set(x):
#     if x == p[x]:
#         return x
#     return find_set(p[x])
#
# def union(x,y):
#     p[find_set(y)] = find_set(x)

t = int(input())
for tc in range(1, t+1):
    n, m = map(int ,input().split())
    lst =list(map(int, input().split()))
    G = [[] for _ in range(n+1)]

    for i in range(m):
        s1 = lst[i*2]
        s2 = lst[i*2+1]
        G[s1].append(s2)
        G[s2].append(s1)

    cnt = 0
    visited = [False] * (n+1)
    for i in range(1,n+1):
        if not visited[i]:
            dfs(i)
            cnt += 1

    print('#{} {}'.format(tc, cnt))
