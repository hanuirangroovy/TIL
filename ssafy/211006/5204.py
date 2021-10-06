import sys
sys.stdin = open("input_5204.txt","r")

def mergesort(lst):
    global cnt
    if len(lst) == 1:   #데이터가 1개일때
        return lst

    # m = 중간값을 구한다
    m = len(lst) // 2
    left = mergesort(lst[:m])    # 왼쪽 반을 mergesort
    right = mergesort(lst[m:]) # 오른쪽 반을 mergesort
    res = merge(left,right)
    return res

def merge(left, right):
    global cnt
    l = r = 0
    res = []
    if left[-1] > right[-1]:
        cnt += 1
    while l < len(left) and r < len(right):
        if left[l] < right[r]:
            res.append(left[l])
            l += 1
        else:
            res.append(right[r])
            r += 1
    #남은 거는 res 뒤에 복사
    res += left[l:]
    res += right[r:]
    return res


t = int(input())
for tc in range(1,t+1):
    n = int(input())
    lst = list(map(int, input().split()))
    cnt = 0
    result = mergesort(lst)
    print('#{} {} {}'.format(tc, result[n//2] ,cnt))