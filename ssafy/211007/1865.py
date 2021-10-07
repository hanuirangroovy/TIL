import sys
sys.stdin = open("input_1865.txt","r")

#1.순열을 만든다
#2.if k==n: 값은 계산한다
#3. 시간초과가 난다면 백트레킹을 해라.


def solve(k, sumV):
    global maxV
    if maxV >= sumV:
        return
    if k==n:
        if maxV < sumV:
            maxV = sumV
            return

    for i in range(n):
        if not used[i]:
            used[i] = True
            solve(k+1, sumV*arr[i][k]*0.01)
            used[i] = False

t = int(input())
for tc in range(1, t+1):
    n = int(input())
    arr = [list(map(int,input().split())) for _ in range(n)]
    used = [False] * n
    maxV = 0
    solve(0,1)
    print('#{0} {1:6f}'.format(tc, maxV*100))
