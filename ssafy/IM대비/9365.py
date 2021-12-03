import sys
sys.stdin = open("input_9365.txt","r")

t = int(input())
for tc in range(1,t+1):
    n = int(input())
    lst = list(map(int,input().split()))
    # maxV = max(lst)
    # result = []
    # for i in range(len(lst)):
    #     if lst[i] == maxV:
    #         result.append(i+1)
    lst_idx = 0
    for i in range(len(lst)):
        if lst[i] > lst[lst_idx]:
            lst_idx = i
    print('#{} {} {}'.format(tc,lst_idx+1,lst[lst_idx]))