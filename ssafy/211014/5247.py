import sys
sys.stdin = open("input_5247.txt","r")


from collections import deque

def solve():
    Q = deque()
    Q.append((n,0))
    # Q = [(n,0)]
    while Q:
        curV, cnt = Q.popleft()
        if curV == m:
            return cnt

        t = [curV*2, curV-10, curV+1, curV-1]
        for newV in t:
            if 0 < newV <= 1000000 and not visited[newV]:
                visited[newV] = True
                Q.append((newV,cnt+1))

tc = int(input())
for tc in range(1, tc+1):
    n,m = map(int,input().split())
    visited = [False] * 1000001
    print('#{} {}'.format(tc,solve()))

