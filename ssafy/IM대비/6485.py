import sys
sys.stdin = open("input_6485.txt","r")

t = int(input())
for tc in range(1,t+1):
    n = int(input())
    check = [0]*5001
    for i in range(n):
        a, b = map(int,input().split())
        for j in range(a,b+1):
            check[j] += 1
    p = int(input())
    lst = []
    for _ in range(p):
        c = int(input())
        lst.append(check[c])
    # print('#{}'.format(tc),end=" ")
    # for i in range(p):
    #     print(lst[i],end=" ")
    # print()
    print('#{}'.format(tc), *lst)

