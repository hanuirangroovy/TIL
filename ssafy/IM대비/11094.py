import sys
sys.stdin = open("input_11094.txt","r")


t = int(input())
for tc in range(1,t+1):
    n = int(input())
    arr = [list(map(int, input().split())) for _ in range(n)]
    result = 0
    for i in range(n):
        for j in range(n):
            sumV = arr[i][j] * -1
            for k in range(n):
                sumV += arr[i][k]
                sumV += arr[k][j]
            if sumV >= result:
                result = sumV
    print('#{} {}'.format(tc,result))
