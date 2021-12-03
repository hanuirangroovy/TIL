import sys
sys.stdin = open("input_1961.txt","r")


t = int(input())
for tc in range(1,t+1):
    n = int(input())
    arr = [list(map(int,input().split())) for _ in range(n)]
    arr90 = [[0]*n for _ in range(n)]
    arr180 = [[0]*n for _ in range(n)]
    arr270 = [[0]*n for _ in range(n)]


    for i in range(n):
        for j in range(n):
            #90도
            arr90[i][j] = arr[n-1-j][i]

            #180도
            arr180[i][j] = arr[n-1-i][n-1-j]

            #270도
            arr270[i][j] = arr[j][n-1-i]
    print('#{}'.format(tc))
    for i in range(n):
        for j in range(n):
            print(arr90[i][j],end="")
        print(end=" ")
        for j in range(n):
            print(arr180[i][j],end="")
        print(end=" ")
        for j in range(n):
            print(arr270[i][j],end="")
        print()

