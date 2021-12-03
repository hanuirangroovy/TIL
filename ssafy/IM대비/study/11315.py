import sys
sys.stdin = open("input_11315.txt","r")
# 위아래, 좌우, 왼대각선, 오대각선
dx = [1,0,1,-1]
dy = [0,1,1,1]

def move(x,y):
    global cnt

    for i in range(4):
        cnt = 0
        for j in range(n):
            newx = x + dx[i]*j
            newy = y + dy[i]*j
            if 0<= newx < n and 0<= newy <n:
                if arr[newx][newy] == 'o':
                    cnt += 1
                    if cnt == 5:
                        lst.append(cnt)
                else:
                    cnt = 0
                    lst.append(cnt)
                    break
            else:
                break

t = int(input())
for tc in range(1,t+1):
    n = int(input())
    arr = [list(input()) for _ in range(n)]
    cnt = 1
    lst = []
    for i in range(n):
        for j in range(n):
            if arr[i][j] == 'o':
                move(i,j)

    if 5 in lst:
        print('#{} YES'.format(tc))

    else:
        print('#{} NO'.format(tc))

