import sys
sys.stdin = open("input_5205.txt","r")

def hoare_p(A, l, r):
    #왼쪽값을 피봇
    pivot = A[l]

    i = l
    j = r

    while i <= j:
        while i <= j and A[i] <= pivot: i+=1 #피봇보다 큰 값을 만날 떄까지 이동
        while i <= j and A[j] >= pivot: j-=1 #피봇보다 작은 값을 만날 때까지 이동

        if i<j:

            A[l], A[j] = A[j], A[l]
    # 경계구역이 정해짐
    A[l], A[j] = A[j], A[l]
    return j

def loumuto_p(A,l,r):
    pivot = A[r]
    i = l-1

    for j in range(l,r):
        if A[j] <= pivot:
            i += 1
            A[l], A[j] = A[j], A[l]

    A[i+1], A[r] = A[r], A[i+1]
    return i+1

def quick_sort(A,l,r):
    if l<r:
        #p = hoare_p(A,l,r)
        p = loumuto_p(A,l,r)
        quick_sort(A,l,p-1) #피봇보다 작은
        quick_sort(A, p+1,r) #피봇보다 큰


t = int(input())
for tc in range(1, t+1):
    n = int(input()) #n : 100만개

    nums = list(map(int,input().split())) #정찰하고 싶은 숫자들

    quick_sort(nums, 0, n-1)

    print("#{} {}".format(tc, nums[n//2]))