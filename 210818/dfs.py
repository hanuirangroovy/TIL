def dfs(s,V):
    visited = [0]*(V+1)
    stack = []
    visited[s] = 1
    i = s  # 현재 방문한 정점 i
    print(node[i])
    while i!=0: #True: 방문할 곳이 있으면
        for w in range(1,V+1):
            if adj[i][w] ==1 and visited[w]==0:
                print(node[w])
                stack.append(i)  # 방문 경로 저장
                i=w              # 새 방문지 이동
                visited[w] = 1
                break
        else:
            if stack:
                i = stack.pop()
            else:
                i = 0
                # break

#          A  B  C  D  E  F  G
adj = [[0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 1, 1, 0, 0, 0, 0],
       [0, 1, 0, 0, 1, 1, 0, 0],
       [0, 1, 0, 0, 0, 1, 0, 0],
       [0, 0, 1, 0, 0, 0, 1, 0],
       [0, 0, 1, 1, 0, 0, 1, 0],
       [0, 0, 0, 0, 1, 1, 0, 1],
       [0, 0, 0, 0, 0, 0, 1, 0]]
node = ['','A', 'B', 'C','D','E','F','G']
