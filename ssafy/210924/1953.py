import sys
sys.stdin = open("input_1953.txt","r")

#탈주범 검거

#우하좌삼
dr = [0, 1, 0, -1]
dc = [1, 0, -1, 0]


#터널구조물
pipe = [
    [0, 0, 0, 0],
    [1, 1, 1, 1], #상하좌우
    [0, 1, 0, 1], #상하
    [1, 0, 1, 0], #좌우
    [1, 0, 0, 1], #상우
    [1, 1, 0, 0], #하우
    [0, 1, 1, 0], #하좌
    [0, 0 ,1 ,1], #상좌
]

t = int(input())

for tc in range(1, t+1):
    N, M, R, C, L = map(int, input().split())
    #지도정보
    tunnel = [list(map(int, input().split())) for _ in range(N)]
    visited = [[0] * M for _ in range(N)] #시간체크 겸 방문 체크

    Q = [(R,C)]
    visited[R][C] = 1

    ans = 0

    while Q:
        r, c = Q.pop(0)
        ans += 1
        if visited[r][c] >= L : continue

        #사방향 탐색
        for d in range(4):
            curr_p = tunnel[r][c]
            # 현재 바라보는 방향으로 길이 x
            if pipe[curr_p][d] == 0: continue
            nr = r + dr[d]
            nc = c + dc[d]

            #다음 좌표가 앱을 벗어났다면
            if nr < 0 or nr >= N or nc < 0 or nc >= M: continue


            nd = (d+2) %4
            np = tunnel[nr][nc]

            #방문했거나 다음좌표의 파이프가 현재좌표와 연결되지 않는다면
            if visited[nr][nc] or pipe[np][nd] == 0: continue

            visited[nr][nc] = visited[r][c] + 1
            Q.append((nr, nc))

    print("#{} {}".format(tc, ans))



