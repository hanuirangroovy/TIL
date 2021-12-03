import sys
sys.stdin = open("input_중력.txt","r")

t = int(input())
for tc in range(1,t+1):
    n = int(input())
    lst = list(map(int,input().split()))
    cnt = 1
    maxV = 0
    for i in range(n-1):
        for j in range(i+1,n):
            if lst[i] > lst[j]:
                cnt += 1
            else:
                if maxV <= cnt:
                    maxV = cnt
                    cnt = 0
                    break


    print('#{} {}'.format(tc,cnt))




