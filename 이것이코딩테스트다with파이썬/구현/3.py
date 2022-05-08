import sys
sys.stdin = open("3.txt","r")


def turn_left():
    global dir
    dir += 1
    if dir == 4:
        dir = 0

# 0:북, 1:동, 2:남 ,3:서
n, m = map(int,input().split())
x, y, dir = map(int,input().split())
arr = [list(map(int,input().split())) for _ in range(n)]

# 동남서북
dx = [0,1,0,-1]
dy = [1,0,-1,0]

cnt = 1
change_time = 0
arr[x][y] = 1
while True:
    turn_left()
    nx = x + dx[dir]
    ny = y + dy[dir]
    if arr[nx][ny] == 0:
        arr[nx][ny] = 1
        x = nx
        y = ny
        cnt += 1
        change_time = 0
        continue
    else:
        change_time += 1
    if change_time == 4:
        nx = x - dx[dir]
        ny = y - dy[dir]
        if arr[nx][ny] == 0:
            x = nx
            y = ny
        else:
            break
        change_time = 0

print(cnt)