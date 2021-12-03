import sys
sys.stdin = open("input_1859.txt","r")

t = int(input())
for tc in range(1,t+1):
    n = int(input())
    lst =list(map(int,input().split()))
    sumV = 0
    maxV = lst[n-1]
    for i in range(n-1,-1,-1):
        if lst[i] >= maxV:
            maxV = lst[i]
        if lst[i] < maxV:
            sumV += maxV - lst[i]



    print('#{} {}'.format(tc,sumV))