import sys
sys.stdin = open("input_12741.txt","r")

t = int(input())
for tc in range(1,t+1):
    a, b, c, d = map(int,input().split())
    result = min(b,d)-max(a,c)
    answer = []
    if result >0:
        answer.append(result)
    else:
        answer.append(0)
for i in range(t):
    print('#{} {}'.format(i+1,answer[i]))
    # result = min(b,d)-c
    # if result > 0:
    #     print(f'#{tc} {result}')
    # else:
    #     print(f'#{tc} {0}')

    # if b > c:
    #     if b<d:
    #         result = b-c
    #     else:
    #         result = d-c





    # check = [0]*101
    # result = 0
    # for i in range(a,b):
    #     check[i] += 1
    # for i in range(c,d):
    #     check[i] += 1
    # for i in range(101):
    #     if check[i] == 2:
    #         result += 1
