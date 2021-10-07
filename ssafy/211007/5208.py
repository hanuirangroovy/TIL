import sys
sys.stdin = open("input_5208.txt","r")


def solve(k, remain, cnt):
    global min_c

    if min_c <= cnt:
        return

    if k == lst[0]:
        if min_c > cnt:
            min_c = cnt
        return

    if remain == 0:
        return

    solve(k+1, lst[k+1], cnt+1)
    solve(k+1, remain-1 , cnt)


t = int(input())
for tc in range(1, t+1):
    lst = list(map(int, input().split())) + [0]
    min_c = 100
    solve(1, lst[1], 0)
    print('#{} {}'.format(tc, min_c))