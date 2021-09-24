import sys
sys.stdin = open("input_5105.txt", "r")

def bfs(curX, curY):
    Q = []

    # 시작점 큐에 넣는다.
    Q.append((curX, curY))
    MIRO[curY][curX] = 0  #방문표시, '0'하고 구분할 것.
    while Q:
        curX, curY = Q.pop(0)

        for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
            nx = curX + dx
            ny = curY + dy
            #인접한 w 중 방문 안한 것을 찾아서 큐에 넣고 방문 표시한다.
            if 0<=nx<N and 0<=ny<N and (MIRO[ny][nx] == '0' or MIRO[ny][nx] == '3'):
                if MIRO[ny][nx] == '3':
                    return MIRO[curY][curX]
                if MIRO[ny][nx] == '0':
                    Q.append((nx, ny))
                    MIRO[ny][nx] = MIRO[curY][curX] + 1
    #경로가 있으면 칸 수, 없으면 0 return
    return 0


TC = int(input())
for tc in range(1,TC+1):
    N = int(input())
    MIRO = [list(input()) for _ in range(N)]


    #print(MIRO)
    for i in range(N):
        if MIRO[i].count('2') > 0: #if
            curX = MIRO[i].index('2')
            curY = i
            break
    #print(curX,curY)
    print('#{} {}'.format(tc, bfs(curX, curY)))


