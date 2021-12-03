import sys
sys.stdin = open("input_4831.txt","r")

t = int(input())
for tc in range(1,t+1):
    k, n, m = map(int,input().split())
    busstop = list(map(int,input().split()))
    last = 0   #마지막 위치
    cnt = 0
    bs = [0]*(n+1)
    for x in busstop:
        bs[x] = 1
    while last + k < n:
        for i in range(k,0,-1):
            if bs[last+i]:
                last += i
                cnt += 1
                break
        else:
            cnt = 0
            break
    print('#{} {}'.format(tc,cnt))
