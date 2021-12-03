import sys
sys.stdin = open("input_11718.txt","r")

# 빈 공간 : 0, 사냥꾼 : 1, 토끼 : 2, 바위 : 3

dx = [-1,1,0,0,1,1,-1,-1]
dy = [0,0,-1,1,1,-1,1,-1]

def move(a,b):
    global cnt
    for i in range(8):
        for j in range(1,n+1):
            newx = a + dx[i]*j
            newy = b + dy[i]*j

            if 0<= newx < n and 0<= newy <n:
                if arr[newx][newy] == 3:
                    break
                if arr[newx][newy] == 2:
                    cnt += 1
            else:
                break


t = int(input())
for tc in range(1,t+1):
    n = int(input()) #배열크기
    arr = [list(map(int, input().split())) for _ in range(n)]
    cnt = 0

    for i in range(n):
        for j in range(n):
            if arr[i][j] == 1:
                move(i,j)
    print('#{} {}'.format(tc, cnt))