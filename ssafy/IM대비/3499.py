import sys
sys.stdin = open("input_3499.txt","r")

t = int(input())
for tc in range(1,t+1):
    n = int(input())
    lst = list(input().split())
    # print('#{}'.format(tc),end=" ")
    # if n%2 == 0:
    #     for i in range(n//2):
    #         print(lst[i],lst[n//2+i], end=" ")
    # else:
    #     for i in range(n//2):
    #         print(lst[i],lst[n//2+i+1],end=" ")
    #     print(lst[n//2])
    # print()

    lst_a = []
    lst_b = []
    if n%2 == 0:
        for i in range(n//2):
            lst_a.append(lst[i])
        for i in range(n // 2, n):
            lst_b.append(lst[i])
    else:
        for i in range(n//2):
            lst_a.append(lst[i])
        for i in range(n // 2+1, n):
            lst_b.append(lst[i])
    result = []
    if n%2 == 0:
        for i in range(n//2):
            result.append(lst_a[i])
            result.append(lst_b[i])
    else:
        for i in range(n // 2):
            result.append(lst_a[i])
            result.append(lst_b[i])
        result.append(lst[n//2])

    print('#{}'.format(tc),end = " ")
    for i in result:
        print(i,end=" ")
    print()

