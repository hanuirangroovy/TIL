import sys
sys.stdin = open("input_6190.txt","r")

t = int(input())
for tc in range(1,t+1):
    n = int(input())
    lst = list(map(int,input().split()))

    x_lst = []   #곱한 값 넣는 곳

    for i in range(n-1):
        for j in range(i+1,n):
            x_lst.append(str(lst[i]*lst[j]))

    result = []  # 단조 증가 수 넣는 곳
    # while문 써볼까?

    for i in x_lst:
        res_n = len(i)-1
        if len(i) == 1:
            result.append(int(i))
        else:
            lst_w = []
            while res_n>0:
                if i[res_n] >= i[res_n-1]:
                    lst_w.append(res_n)
                    if len(lst_w) == (len(i)-1):
                        result.append(int(i))
                res_n -= 1


    # lst_n = len(x_lst)
    # while lst_n>0:     #lst_n: x_lst개수, res_n:자릿수
    #     res_n = len(x_lst[lst_n])-1
    #     if len(x_lst[lst_n]) == 1:
    #         x_lst[res_n].append(int(result))
    #         lst_n -= 1
    #     else:
    #         if x_lst[lst_n][res_n] >= x_lst[lst_n][res_n-1]:



    #10미만
    # for i in x_lst:
    #     if len(i) == 1:
    #         result.append(int(i))
    #10~99일 때
        # elif len(i) == 2:
        #     if i[1] >= i[0]:
        #         result.append(int(i))
    #100~999일 때
        # elif len(i) == 3:
        #     if i[1] >= i[0] and i[2] >= i[1]:
        #         result.append(int(i))
    # 1000~9999일 때
    #     elif len(i) == 4:
    #         if i[1] >= i[0] and i[2] >= i[1] and i[3] >= i[2]:
    #             result.append(int(i))
    # 10000~30000
    #     elif len(i) == 5:
    #         if i[1] >= i[0] and i[2] >= i[1] and i[3] >= i[2] and i[4]>= i[3]:
    #             result.append(int(i))

    # 없으면 -1 출력
    if len(result) == 0:
        print('#{} {}'.format(tc, -1))
    else:
        answer = max(result)
        print('#{} {}'.format(tc, answer))


