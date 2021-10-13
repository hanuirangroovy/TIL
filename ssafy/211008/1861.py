import sys
sys.stdin = open("input_1861.txt","r")

def dfs(x,y,v):
    if result[y][x] > 0:
        return result[y][x]
    t = 0
    for dx, dy in [(0,1),(0,-1),(1,0),(-1,0)]:
        newx = x +dx
        newy = y +dy
        if 0 <= newx < n and 0<=newy<n and v+1 ==arr[newy][newx]:
            t = dfs(newx,newy,v+1)
    result[y][x] = t+1
    return t+1

t = int(input())
for tc in range(1, t + 1):
    n = int(input())
    arr = [list(map(int,input().split())) for _ in range(n)]
    result = [[0]* n for _ in range(n)]

    maxC = 0
    maxV = -1
    for i in range(n):
        for j in range(n):
            cnt = dfs(j, i, arr[i][j])
            if cnt > maxC:
                maxC = cnt
                maxV = arr[i][j]
            elif cnt == maxC and maxV>=arr[i][j]:
                maxV = arr[i][j]


    print("#{} {} {}".format(tc, maxV, maxC))