import sys
sys.stdin = open("input_5207.txt","r")

def chk(lst, key):
    #찾았으면 1을 return 1
    #못찾았으면 0을 return 0
    #조건이 안맞는 경우 return 0
    l = 0
    r = len(lst) - 1
    di = 0
    while l<= r:
        m = (l+r)//2
        if key == lst[m]:
            return 1
        if key < lst[m]:
            if di=='l':
                return 0
            r = m-1
            di = 'l'
        else:
            if di == 'r':
                return 0
            l = m+1
            di = 'r'
    return 0


t = int(input())
for tc in range(1,t+1):
    n,m = map(int,input().split())
    a = list(map(int,input().split()))
    b = list(map(int,input().split()))
    a.sort()
    cnt = 0
    for key in b:
        cnt += chk(a, key)
    print(cnt)