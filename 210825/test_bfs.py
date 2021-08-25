def bfs(v):
    ST = []
    visited = [False] * 8

    ST.append(v)   #첫번째 것 무조건 스택에 넣는다
    visited[v] = True
    while ST:
        v = ST.pop(-1) #스택에서 정보 추출
        print(v)   #v에 대해 처리(출력)
        for w in G[v]:   #v와 인접한 w 중에 방문 안한 것들을
            if not visited[w]:
                ST.append(w)
                visited[w] = True

def bfs_G(v):
    Q = []
    visited = [False] * 8
    Q.append(v) #첫번째 것 무조건 큐에 넣는다
    visited[v] = True
    while Q:
        v = Q.pop(0) # 큐에서 정보 추출
        print(v)  #v에 대해 처리(출력)
        for w in G[v]: #v와 인접한 w 중에 방문 안한 것들을:
            if not visited[w]: #큐에 넣는다:
                Q.append(w)
                visited[w] = True


def bfs_adj(v):
    Q = []
    visited = [False] * 8

    Q.append(v)
    visited[v] = True

    while Q:
        v = Q.pop(0)
        print(v)

        for w in range(len(adj[v])):
            if adj[v][w] == 1 and not visited[w]:
                Q.append(w)
                visited[w] = True





lst = [1, 2, 1, 3, 2, 4, 6, 2, 5, 4, 6, 5, 6, 6, 7, 3, 7]
G = [[] for _ in range(8)]
adj = [[0]*8 for _ in range(8)]   #인접행렬

for i in range(0, 16, 2):
    v1 = lst[i]
    v2 = lst[i+1]

    G[v1].append(v2)
    G[v2].append(v1)

    adj[v1][v2] = 1             #방향성 없기에
    adj[v2][v1] = 1

#print(G)
#print(adj)
#bfs_G(1)
#bfs_adj(1)
bfs(1)