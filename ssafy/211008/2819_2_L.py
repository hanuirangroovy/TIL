import sys
sys.stdin = open("input_2819.txt","r")

dr = [-1,1,0,0]
dc = [0,0,-1,1]

def DFS2(r, c, num, idx):
    if idx == 7:
        ans.add(num)
    else:
        for i in range(4):
            nr, nc = r + dr[i], c + dc[i]

            if 0 <= nr < n and 0 <= nc < n:
                DFS2(nr, nc, num*10+arr[nr][nc], idx+1)


t = int(input())

for tc in range(1, t + 1):
    n = 4

    arr = [list(map(int, input().split())) for _ in range(n)]
    ans = set()

    for i in range(n):
        for j in range(n):
            DFS2(i, j, arr[i][j],1)
    print("#{} {}".format(tc, len(ans)))