import sys
sys.stdin = open("input_토글.txt","r")

def change(arr):
    if arr[i][j] == 1:
        arr[i][j] = 0
    else:
        arr[i][j] = 1
    return

t = int(input())
for tc in range(1,t+1):
    n,m = map(int,input().split())
    arr = [[0]*(n+2)]+ [[0]+list(map(int,input().split()))+[0] for _ in range(n)] + [[0]*(n+2)]



    for k in range(1, m+1):
        for i in range(n + 1):
            for j in range(n + 1):
                if m%k==0:
                    change(arr)
                elif (i+j) % k == 0:
                    change(arr)
    cnt = 0
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            if arr[i][j] == 1:
                cnt += 1

    print('#{} {}'.format(tc, cnt))






    # k = m - 1
    # for i in range(n):
    #     for j in range(n):
    #         if (i+j) %(m-1):
    #             arr2[i][j] = 1
    #         else:
    #             arr2[i][j] = 0
    #
    # if m == 1:
    #     print('#{} {}'.format(tc, n*n))
    # elif m == 2:
    #     print('#{} {}'.format(tc, (n*n)/2))
    # else: #m-1인 곳을 구해서 0값 구하기
    #     k = m-1
    #     kn = (n*n)//(k)+1
    #     for i in range(n):
    #         for j in range(n):
    #             for kk in range(1,kn):
    #                 if i+j == kn*k:
    #                     change(arr2)
    #     cnt = 0
    #     for i in range(n):
    #         for j in range(n):
    #             if arr2[i][j] == 0:
    #                 cnt += 1
    #     print('#{} {}'.format(tc, cnt))