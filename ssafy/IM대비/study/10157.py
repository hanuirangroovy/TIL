import sys
sys.stdin = open("input_10157.txt","r")

dr = [1,0,-1,0]
dc = [0,1,0,-1]


c, r = map(int,input().split())
k = int(input())
arr = [[0]*c for _ in range(r)]
if k > c*r:
    print(0)
else:
    x = 0
    y = 0
    dir = 0
    for i in range(1,k+1):
        arr[x][y] = i
        x += dc[dir]
        y += dr[dir]
        if x < 0 or y < 0 or x >= r or y >= c or arr[x][y] != 0:
            x -= dc[dir]
            y -= dr[dir]
            dir = (dir+1)%4
            x += dc[dir]
            y += dr[dir]
    print(x+1,y)
