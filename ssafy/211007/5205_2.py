import sys
sys.stdin = open("input_5205.txt","r")

#제한시간 초과

def quicksort(lst):
    if len(lst) <= 1:
        return lst
    p = lst[0]
    e = lst[1:]  #p 제외 리스트

    l = [x for x in e if x<=p]  #분할된 왼쪽 부분
    r = [x for x in e if x>p]   #분할된 오른쪽 부분

    return quicksort(l) +[p] + quicksort(r)

t = int(input())
for tc in range(1, t+1):
    n = int(input())
    lst = list(map(int, input().split()))
    result = quicksort(lst)
    print('#{} {}'.format(tc, result[n//2]))