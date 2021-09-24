import sys
sys.stdin = open(f'input_4869.txt', "r")

TC = int(input())

ARR = [0]*31
ARR[1] = 1
ARR[2] = 3
for n in range(3, 31):
    ARR[n] = ARR[n-1] + 2*ARR[n-2]

for tc in range(1, TC+1):
    N = int(input()) // 10
    print('#{} {}'.format(tc, ARR[N]))