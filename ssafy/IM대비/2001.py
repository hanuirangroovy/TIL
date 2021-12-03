import sys
sys.stdin = open("input_2001.txt","r")

t = int(input())
for tc in range(1,t+1):
    n, m = map(int,input().split())  # n:배열크기, m:파리채
    arr = [list(map(int,input().split())) for _ in range(n)]
    maxV = 0
    for i in range(n-m+1):
        for j in range(n-m+1):
            cnt = 0
            for mr in range(m):
                for mc in range(m):
                    cnt += arr[i+mr][j+mc]
                    if cnt >= maxV:
                        maxV = cnt

    print('#{} {}'.format(tc,maxV))