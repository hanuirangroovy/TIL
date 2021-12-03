import sys
sys.stdin = open("input_12733.txt","r")

dr = [-1,0,1,0]
dc = [0,1,0,-1]


t = int(input())
for tc in range(1,t+1):
    n = int(input())
    # arr = [[]*n for _ in range(n)]
    # for i in range(n):
    #     for j in input():
    #         arr[i].append(j)
    arr = [list(input()) for _ in range(n)]

    # 집 : H, A:1, B:2, C:3
    for i in range(n):
        for j in range(n):
            if arr[i][j] == 'A':
                for dir in range(4):
                    newx = i
                    newy = j
                    newx += dr[dir]
                    newy += dc[dir]
                    if 0<= newx < n and 0<= newy < n:
                        arr[newx][newy] = 'X'
            if arr[i][j] == 'B':
                for dir in range(4):
                    for k in range(1, 3):
                        newx = i
                        newy = j
                        newx += dr[dir]*k
                        newy += dc[dir]*k
                        if 0<= newx < n and 0<= newy < n:
                            arr[newx][newy] = 'X'
            if arr[i][j] == 'C':
                for dir in range(4):
                    for k in range(1, 4):
                        newx = i
                        newy = j
                        newx += dr[dir]*k
                        newy += dc[dir]*k
                        if 0<= newx < n and 0<= newy < n:
                            arr[newx][newy] = 'X'
    cnt = 0
    for i in range(n):
        for j in range(n):
            if arr[i][j] == 'H':
                cnt += 1
    print('#{} {}'.format(tc,cnt))

