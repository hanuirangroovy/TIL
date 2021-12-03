import sys
sys.stdin = open("input_4835.txt","r")


t = int(input())
for tc in range(1,t+1):
    n, m = map(int,input().split())
    lst = list(map(int,input().split()))
    maxV = 0
    minV = 987654231
    for i in range(n-m+1):
        sumV = 0
        for j in range(m):
            sumV += lst[i+j]
        if sumV >= maxV:
            maxV = sumV
        if sumV <= minV:
            minV = sumV

    print('#{} {}'.format(tc, maxV-minV))
