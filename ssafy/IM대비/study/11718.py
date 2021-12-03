import sys
sys.stdin = open("input_11718.txt","r")

# 빈 공간 : 0, 사냥꾼 : 1, 토끼 : 2, 바위 : 3

def move(a,b,direction):
    global cnt
    #상
    if direction == 0:
        while a>=0:
            if arr[a][b] == 2:
                cnt += 1
            if arr[a][b] == 3:
                break
            a -= 1
    #하
    if direction == 1:
        while a < n:
            if arr[a][b] == 2:
                cnt += 1
            if arr[a][b] == 3:
                break
            a += 1

    #좌
    if direction == 2:
        while b>=0:
            if arr[a][b] == 2:
                cnt += 1
            if arr[a][b] == 3:
                break
            b -= 1

    #우
    if direction == 3:
        while b< n:
            if arr[a][b] == 2:
                cnt += 1
            if arr[a][b] == 3:
                break
            b += 1
    #대각선 (좌상)
    if direction == 4:
        while a>=0 and b>=0:
            if arr[a][b] == 2:
                cnt += 1
            if arr[a][b] == 3:
                break
            a -= 1
            b -= 1
    #대각선(우상)
    if direction == 5:
        while a >= 0 and b < n:
            if arr[a][b] == 2:
                cnt += 1
            if arr[a][b] == 3:
                break
            a -= 1
            b += 1
    #대각선(좌하)
    if direction == 6:
        while a<n and b>=0:
            if arr[a][b] == 2:
                cnt += 1
            if arr[a][b] == 3:
                break
            a += 1
            b -= 1
    #대각선(우하)
    if direction == 7:
        while a<n and b<n:
            if arr[a][b] == 2:
                cnt += 1
            if arr[a][b] == 3:
                break
            a += 1
            b += 1

t = int(input())
for tc in range(1,t+1):
    n = int(input()) #배열크기
    arr = [list(map(int, input().split())) for _ in range(n)]
    cnt = 0

    for i in range(n):
        for j in range(n):
            if arr[i][j] == 1:
                move(i, j, 0)
                move(i, j, 1)
                move(i, j, 2)
                move(i, j, 3)
                move(i, j, 4)
                move(i, j, 5)
                move(i, j, 6)
                move(i, j, 7)
    print('#{} {}'.format(tc, cnt))



