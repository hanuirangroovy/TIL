import sys
sys.stdin = open("input_9490.txt","r")

dr = [-1,0,1,0]
dc = [0,1,0,-1]

t = int(input())
for tc in range(1,t+1):
    n, m = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(n)]
    result = 0

    for i in range(n):
        for j in range(m):
            sumV = 0
            for dir in range(4):
                for k in range(1,arr[i][j]+1):
                    newx = i + dr[dir]*k
                    newy = j + dc[dir]*k
                    if 0<= newx <n and 0<= newy <m:
                        sumV += arr[newx][newy]
            sumV += arr[i][j]
            if sumV >= result:
                result = sumV
    print('#{} {}'.format(tc, result))