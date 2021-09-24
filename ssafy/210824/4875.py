
def dfs_o(v): #원형
    ST.append(v)
    visited[v] = True

    while ST:
        v = ST.pop()
        for w in G[v]:   #인접한 w
            if not visited[w]:
                ST.append(w)
                visited[w]

def dfs(curX, curY):
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]
    ST = []
    #  시작지점에서 종료지점까지 갈 수 있으면 1을 return
    # 아니면 0을 return

    ST.append((curX, curY))
    ARR[curY][curX] = 1

    while ST:
        (curX, curY) = ST.pop()
        for d in range(4):
            newX = curX + dx[d]
            newY = curY +dy[d]
            if 0 <= newY < N and 0<= newX < N and ARR[newY][newX] == 0:  #방문안한 애들만 stack에 넣음
                ST.append((newX, newY))
                ARR[newY][newX] = 1
    return 0

TC = int(input())
for tc in range(1, TC+1):
    N = int(input())
    ARR = [list(map(int, input())) for _ in range(N)]
    #ARR = [list(input()) for _ in range(N)]

    for i in range(N):
        for j in range(N):
            if ARR[i][j] == 2:
                curX = j
                curY = i
                break
    result = dfs(curX, curY)


def dfs(curX, curY):
    dx = [0, 0, 1, -1]
    dy = []
    ST = []
    ST.append(curX, curY)   #v : (curX, curY)
    #visited[v] = True   #방문은 첫번째 2차원 배열, 두번째 방법은 길을 벽으로 바꾼다.
    ARR[curV][cury] = 1

    while ST:
        (curX, curY) = ST.pop()
        #print(v)
        for d in range(4):
            newX = curX + dx[d]
            newY =

            if newX, newY를 이용해서 갈 수 있는 길이면
                ST.append((newX, newY))
                ARR[newy][newX] = 1


curX, curY = 스타트 지점을 찾아서
dfs(curX, curY)