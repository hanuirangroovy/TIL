import sys
sys.stdin = open("input_9386.txt","r")

t = int(input())
for tc in range(1,t+1):
    n = int(input())
    lst = list(map(int,input()))
    result = 0
    cnt = 1
    for i in range(n-1):
        if lst[i] == 1:

            if lst[i] == lst[i+1]:
                cnt += 1
            if result <= cnt:
                result = cnt
        else:
            cnt = 1

    print('#{} {}'.format(tc,result))

