import sys
sys.stdin = open("input_11673.txt","r")

# 우하좌상
dy = [0, 1, 0, -1]
dx = [1, 0, -1, 0]

def ref_glass(y,x):
    global cnt
    d = 0
    x -= 1
    while True:
        y += dy[d]
        x += dx[d]
        if x < 0 or x >= n or y <0 or y >= n:
            return
        elif d == 0: #오른쪽
            if arr[y][x] == 1:
                d = 3
                cnt += 1
            elif arr[y][x] == 2:
                d = 1
                cnt += 1

        elif d == 1: #아래
            if arr[y][x] == 1:
                d = 2
                cnt += 1
            elif arr[y][x] == 2:
                d = 0
                cnt += 1

        elif d == 2: #왼쪽
            if arr[y][x] == 1:
                d = 1
                cnt += 1
            elif arr[y][x] == 2:
                d = 3
                cnt += 1

        elif d == 3: #위
            if arr[y][x] == 1:
                d = 0
                cnt += 1
            elif arr[y][x] == 2:
                d = 2
                cnt += 1

t = int(input())
for tc in range(1,t+1):
    n = int(input())
    arr = [list(map(int, input().split())) for _ in range(n)]
    cnt = 0

    for i in range(n):
        for j in range(n):
            if arr[i][j]:
                ref_glass(i,j)
                break
        break
    print('#{} {}'.format(tc, cnt))


