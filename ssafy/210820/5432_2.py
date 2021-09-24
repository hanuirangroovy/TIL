import sys
sys.stdin = open('input_5432.txt', "r")

T = int(input())

for tc in range(1, T + 1):
    iron_bar = input()

    cnt = 0 #막대 수
    ans = 0

    for i in range(len(iron_bar)):
        #열린괄호면 넣어
        if iron_bar[i] == '(':
            cnt += 1
        elif iron_bar[i-1] == '(':
            cnt -= 1
            ans += cnt
        else:
            cnt -= 1
            ans += 1

    print('#{} {}'.format(tc, ans))