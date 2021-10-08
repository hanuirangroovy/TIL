import sys
sys.stdin = open("input_2819.txt","r")

dr = [-1,1,0,0]
dc = [0,0,-1,1]

def DFS(r, c, line):
    if len(line)==7:
        # if line not in ans:
        #     ans.append(line)
        ans.add(line)
        return
    for i in range(4):
        nr = r+dr[i]
        nc = c+dc[i]

        if nr <0 or nr >= n or nc<0 or nc>=n:
            continue
        DFS(nr,nc, line+arr[nr][nc])



t = int(input())

for tc in range(1, t + 1):
    n = 4

    arr = [input().split() for _ in range(n)]
    # ans = []
    ans = set()
    for i in range(n):
        for j in range(n):
            DFS(i, j, arr[i][j])
    print("#{} {}".format(tc, len(ans)))