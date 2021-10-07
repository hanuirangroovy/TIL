import sys
sys.stdin = open("input_5205.txt","r")

def quicksort(lst, s, e):
    if s >= e:
        return
    p = s
    l = s+1
    r = e
    while l <= r:
        while l <= e and lst[l] <= lst[p]:
            l += 1
        while r > s and lst[r] >= lst[p]:
            r -= 1
        if l > r: #엇갈
            lst[r], lst[p] = lst[p], lst[r]
        else:
            lst[l], lst[r] = lst[r], lst[l]
    quicksort(lst, s, r-1)
    quicksort(lst, r+1, e)

t = int(input())
for tc in range(1, t+1):
    n = int(input())
    lst = list(map(int, input().split()))
    quicksort(lst, 0, len(lst) - 1)
    print('#{} {}'.format(tc, lst[n//2]))