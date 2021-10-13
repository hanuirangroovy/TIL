'''
마지막 정점번호, 간선 수
6 8
0 1 0 2 0 5 0 6 4 3 5 3 5 4 6 4
'''

v, e = map(int, input().split())
edge = list(map(int, input().split()))

adjm = [[0]*(v+1) for _ in range(v+1)]
for i in range(e):
    n1, n2 = edge[2*i], edge[2*i+1]
    adjm[n1][n2] = 1
    adjm[n2][n1] = 1 #무향그래프인 경우
print(adjm)

adjl = [[] for _ in range(v+1)]
for i in range(e):
    n1, n2 = edge[2*i], edge[2*i+1]
    adjl[n1].append(n2) #n1에서 n2로 가는 연결
    adjl[n2].append(n1) #무향그래프인 경우
print(adjl)