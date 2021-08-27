import sys
sys.stdin = open("input_5099.txt", "r")

TC = int(input())
for tc in range(1, TC+1):
    n, m = map(int,input().split())
    ci = [0] + list(map(int,input().split()))

    Q = [0] * n
    newpizza = 1
    while Q:
        pizza = Q.pop(0)
        ci[pizza] = ci[pizza] // 2

        if ci[pizza] == 0:
            if newpizza <= m:
                Q.append(newpizza)
                newpizza += 1
        else:
            Q.append(pizza)

    print('#{} {}'.format(tc, pizza))