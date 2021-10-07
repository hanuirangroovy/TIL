import sys
sys.stdin = open("input_5209.txt","r")

#1.순열을 만든다
#2.if k==n: 값은 계산한다
#3. 시간초과가 난다면 백트레킹을 해라.


def solve(k, sumV):
    global minV
    if minV <= sumV:
        return
    if k==n:
        if minV > sumV:
            minV = sumV
        return

    for i in range(n):
        if not used[i]:
            res[k] = i
            used[i] = True
            solve(k+1, sumV+arr[k][i])
            used[i] = False

t = int(input())
for tc in range(1, t+1):
    n = int(input())
    arr = [list(map(int,input().split())) for _ in range(n)]
    res = [False]*n
    used = [0] * n
    minV = 100*n*n
    solve(0,0)
    print('#{} {}'.format(tc, minV))
