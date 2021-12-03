import sys
sys.stdin = open("input_1959.txt","r")

t = int(input())
for tc in range(1, t+1):
    len_a, len_b = map(int,input().split())
    lst_a = list(map(int,input().split()))
    lst_b = list(map(int,input().split()))


    result = 0
    if len_a >= len_b:
        for i in range(len_a-len_b+1):
            maxV = 0
            for j in range(len_b):
                maxV += lst_a[i+j]*lst_b[j]
                if j == len_b-1:
                    if result <= maxV:
                        result = maxV
                        maxV = 0
    else:
        for i in range(len_b-len_a+1):
            maxV = 0
            for j in range(len_a):
                maxV += lst_b[i+j]*lst_a[j]
                if j == len_a-1:
                    if result <= maxV:
                        result = maxV
                        maxV = 0
    print('#{} {}'.format(tc,result))
