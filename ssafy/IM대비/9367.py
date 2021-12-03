import sys
sys.stdin = open("input_9367.txt","r")

t = int(input())
for tc in range(1,t+1):
    n = int(input())
    lst = list(map(int,input().split()))
    cnt = 1
    result = 1
    for i in range(n-1):
        if lst[i] < lst[i+1]:
            cnt += 1
            if cnt >= result:
                result = cnt
        else:
            cnt = 1

    print('#{} {}'.format(tc, result))