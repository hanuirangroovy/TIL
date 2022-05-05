import sys
sys.stdin = open("3.txt","r")

t = int(input())
for tc in range(1,t+1):
    n, m = map(int,input().split())
    arr = [list(map(int,input().split()))for _ in range(n)]
    result = 0
    for i in range(n):
        minV = min(arr[i])
        if minV > result:
            result = minV

    print(tc, result)


