import sys
sys.stdin = open("input_11042.txt","r")


t = int(input())
for tc in range(1,t+1):
    N, n,m = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(N)]
    result = 0
    for i in range(N-n+1):
        for j in range(N-m+1):
            sumV = 0
            for k in range(n):
                for l in range(m):
                    sumV += arr[i+k][j+l]
                    if sumV >= result:
                        result = sumV
    print('#{} {}'.format(tc, result))