import sys
sys.stdin = open(f'input_4869.txt', "r")


#재귀점화식

#점화식
#f(n) = f(n-1) + 2*f(n-2)
#f(1) = 1, f(2) = 3

def f(n):
    if n ==1:
        return 1
    if n==2:
        return 3
    return f(n-1) + 2*f(n-2)

TC = int(input())
for tc in range(1, TC+1):
    N = int(input()) // 10

    print('#{} {}'.format(tc, f(N)))