import sys
sys.stdin = open("input_12712.txt","r")

dr = [-1,0,1,0]
dc = [0,1,0,-1]
dx = [-1,-1,1,1]
dy = [-1,1,-1,1]

t = int(input())
for tc in range(1,t+1):
    n,m = map(int,input().split())
    arr = [list(map(int,input().split())) for _ in range(n)]
    sum_x = 0
    maxV = 0
    result=[]
    # + 모양
    for i in range(n):
        for j in range(n):
            sum_p = 0
            for dir in range(4):
                for k in range(1,m):
                    newx = i
                    newy = j
                    newx += dr[dir]*k
                    newy += dc[dir]*k
                    if 0 <= newx <n and 0<= newy < n:
                        sum_p += arr[newx][newy]

            sum_p += arr[i][j]
            result.append(sum_p)
            if sum_p >= maxV:
                maxV = sum_p

    #x 모양
    for i in range(n):
        for j in range(n):
            sum_x = 0
            for dir in range(4):
                for k in range(1,m):
                    newx = i
                    newy = j
                    newx += dx[dir]*k
                    newy += dy[dir]*k
                    if 0 <= newx <n and 0<= newy < n:
                        sum_x += arr[newx][newy]
            sum_x += arr[i][j]
            result.append(sum_x)
            if sum_x >= maxV:
                maxV = sum_x
    print('#{} {}'.format(tc,maxV))
