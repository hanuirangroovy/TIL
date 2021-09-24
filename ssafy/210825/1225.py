import sys
sys.stdin = open("input_1225.txt", "r")

for tc in range(1, 11):
    t = int(input())
    lst = list(map(int, input().split()))
    while lst[-1] > 0:
        for i in range(1,6):
            n = lst.pop(0)
            if n - i > 0:
                lst.append(n-i)
            else:
                lst.append(0)
                break
    print('#{} {}'.format(tc, ' '.join(map(str,lst))))