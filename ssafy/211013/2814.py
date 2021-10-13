import sys
sys.stdin = open("input_2814.txt","r")


def dfs(node, n):
    global result
    if n > result:
        result = n

    for i in grp[node]:
        if not visited[i]:
            visited[i] = 1
            dfs(i, n + 1)
            visited[i] = 0


t = int(input())
for tc in range(1,t+1):
    #n : 노드, m:간선
    n, m = map(int, input().split())
    grp = [[] for _ in range(n + 1)]
    visited = [0] * (n + 1)
    for _ in range(m):
        node1, node2 = map(int, input().split())
        grp[node1].append(node2)
        grp[node2].append(node1)
    result = 0
    for i in range(1, n+1):
        visited[i] = 1
        dfs(i, 1)
        visited[i] = 0
    print('#{} {}'.format(tc, result))