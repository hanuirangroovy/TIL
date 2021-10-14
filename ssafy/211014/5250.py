import sys
sys.stdin = open("input_5250.txt","r")


from collections import deque

def solve():
    Q = deque()
    Q.append((0,0))
    D[0][0] = 0

    while Q:
        curX, curY = Q.popleft()
        for dx, dy in [(0,1), (0,-1), (1,0), (-1,0)]:
            newX = curX +dx
            newY = curY + dy
            if 0 <= newX<n and 0<=newY<n:
                #cur지점과 new지점 사이의 연료량
                fuel = max(arr[newY][newX]-arr[curY][curX], 0) + 1
                if D[newY][newX] > D[curY][curX]+fuel:
                    D[newY][newX] = D[curY][curX] + fuel
                    Q.append((newX, newY))

t = int(input())
for tc in range(1,t+1):
    n = int(input())
    arr = [list(map(int, input().split())) for _ in range(n)]

    D = [[n*n*1000] * n for _ in range(n)]
    solve()

    print('#{} {}'.format(tc, D[n-1][n-1]))