import sys
sys.stdin = open("input_1979.txt","r")

t = int(input())
for tc in range(1,t+1):
    n, m = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(n)]
    result = 0
    arr_r = [[0]*n for _ in range(n)]
    arr_c = [[0]*n for _ in range(n)]

    for i in range(n):
        for j in range(n):
            arr_r[i][j] = arr[i][j]
            arr_c[i][j] = arr[i][j]


    # 가로
    for i in range(n):
        for j in range(n):
            if arr_r[i][j] == 1:
                cnt = 0
                while 0<=i<n and 0<=j<n and arr_r[i][j] == 1:
                    arr_r[i][j] = 0
                    cnt += 1
                    j += 1
                if cnt == m:
                    result += 1

    # 세로
    for i in range(n):
        for j in range(n):
            if arr_c[j][i] == 1:
                cnt = 0
                while 0<=i<n and 0<=j<n and arr_c[j][i] == 1:
                    arr_c[j][i] = 0
                    cnt += 1
                    j += 1
                if cnt == m:
                    result += 1


    print('#{} {}'.format(tc, result))