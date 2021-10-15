import sys
sys.stdin = open("input_5251.txt","r")

def dijstra():
    dist = [987654321] * (v+1)
    visited = [0] * (v+1)

    dist[0] = 0

    for _ in range(v):
        min_idx = -1
        min_value = 987654321
        #최소값 찾기
        for i in range(v+1):
            if not visited[i] and min_value > dist[i]:
                min_idx = i
                min_value = dist[i]

        visited[min_idx] = 1
        #갱신할 수 있으면 갱신
        for i in range(v+1):
            if not visited[i] and dist[i] > dist[min_idx]+adj_arr[min_idx][i]:
                dist[i] = dist[min_idx] + adj_arr[min_idx][i]

    return dist[v]


t = int(input())

for tc in range(1, t+1):
    v, e = map(int, input().split())   #v:마지막 정점의 번호, e: 간선의 수

    adj_arr = [[987654321]*(v+1) for _ in range(v+1)]

    for i in range(e):
        s, e, w = map(int, input().split())
        adj_arr[s][e] = w #유향 그래프이니까

    print('#{} {}'.format(tc, dijstra()))