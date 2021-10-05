import sys
sys.stdin = open("input_5201.txt","r")


TC = int(input())
for tc in range(1,TC+1):
    n, m = map(int, input().split())   #컨테이너 수 : n, 트럭 수 : m
    w = list(map(int, input().split()))   # n개 화물의 무게 : w, 트럭 적재 용량 : t
    t = list(map(int, input().split()))

    w.sort(reverse=True)
    t.sort(reverse=True)

    j = 0
    sumV = 0
    for i in t:
        while j < n and w[j] > i:
            j += 1
        if j == n:
            break
        # if w[j] <= i:
        sumV += w[j]
        j += 1
    print('#{} {}'.format(tc, sumV))
