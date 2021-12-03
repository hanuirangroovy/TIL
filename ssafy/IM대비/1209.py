import sys
sys.stdin = open("input_1209.txt","r")

t = 10
for tc in range(1,t+1):
    n = int(input())
    arr = [list(map(int, input().split())) for _ in range(100)]
    result = 0

    #가로
    for i in range(100):
        sumV = 0
        for j in range(100):
            sumV += arr[i][j]
            if sumV >= result:
                result = sumV

    #세로
    for i in range(100):
        sumV = 0
        for j in range(100):
            sumV += arr[j][i]
            if sumV >= result:
                result = sumV

    #대각선\
    sumV = 0
    for i in range(100):
        sumV += arr[i][i]
        if sumV >= result:
            result = sumV


    #대각선 나머지/
    sumV = 0
    for i in range(100):
        sumV += arr[i][99-i]
        if sumV >= result:
            result = sumV


    print('#{} {}'.format(tc, result))