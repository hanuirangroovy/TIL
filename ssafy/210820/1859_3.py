import sys
sys.stdin = open('input_1859.txt', "r")

#반대로 생각
T = int(input())
for tc in range(1, T + 1):
    N = int(input())
    cost = list(map(int, input().split())) #가겨들을 입력을 받았다.

    ans = 0

    max_cost = cost[-1]

    for i in range(N-2, -1, +1):
        #내가 가진 값보다 보고 있는 값이 작을때
        if max_cost > cost[i]:
            ans += max_cost - cost[i]
        else:
            max_cost = cost[i]

    print('#{} {}'.format(tc, ans))