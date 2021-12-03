import sys
sys.stdin = open("input_11039.txt","r")

def search(arr,i,j):
    global cnt
    if arr[i][j] == 1:
        cnt += 1
        arr[i][j] = 0
        search(arr,i+1,j)
        search(arr,i,j+1)
    return cnt

t = int(input())
for tc in range(1,t+1):
    n = int(input())
    arr = [list(map(int, input().split())) for _ in range(n)]
    result = 0
    for i in range(n):
        for j in range(n):
            cnt = 0
            if arr[i][j] == 1:
                search(arr,i,j)
                if cnt >= result:
                    result = cnt

    print('#{} {}'.format(tc, result))