import sys
sys.stdin = open("input_1974.txt","r")

t = int(input())
for tc in range(1,t+1):
    n = 9
    arr = [list(map(int,input().split())) for _ in range(n)]
    result = []
    # 가로
    for i in range(n):
        lst = [0]*10
        cnt = 0
        for j in range(n):
            lst[arr[i][j]] += 1
        for k in lst:
            if k != 0:
                cnt += 1
                if cnt == 9:
                    result.append(1)
    # 세로
    for i in range(n):
        lst = [0]*10
        cnt = 0
        for j in range(n):
            lst[arr[j][i]] += 1
        for k in lst:
            if k != 0:
                cnt += 1
                if cnt == 9:
                    result.append(1)
    # 3*3
    for i in range(0,7,3):
        for j in range(0,7,3):
            lst = [0] * 10
            cnt = 0
            for k in range(3):
                for l in range(3):
                    lst[arr[i+k][j+l]] += 1
            for x in lst:
                if x != 0:
                    cnt += 1
                    if cnt == 9:
                        result.append(1)
    ans = 0
    if len(result) == 27:
        ans = 1
    else:
        ans = 0
    print('#{} {}'.format(tc,ans))

