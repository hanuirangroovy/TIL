import sys
sys.stdin = open("input_1860.txt","r")

t = int(input())
for tc in range(1,t+1):
    n,m,k = map(int,input().split())   # n명 사람 m초 k개 붕어빵
    lst = list(map(int,input().split()))
    lst_s = sorted(lst)
    min = 0
    for i in lst_s:
        if i%m:
            print(f'#{tc} {'Impossible'}')
        else:
            if
            print(f'#{tc} {'Possible'}')

