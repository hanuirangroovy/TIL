import sys
sys.stdin = open('input_1220.txt')

t = 10

# 1이 n, 2가 s
for tc in range(1,t+1):
    n = int(input())
    table = [list(map(int, input().split())) for _ in range(n)]

    cnt = 0
    for i in range(n):
        lst = []
        for j in range(n):
            if not lst and table[j][i] == 1:
                lst.append(1)
            elif lst and table[j][i] == 2:
                cnt += 1
                lst.pop()

    print('#{} {}'.format(tc,cnt))
