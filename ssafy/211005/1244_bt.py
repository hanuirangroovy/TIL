import sys
sys.stdin = open("input_1244.txt","r")

def solve(k):
    global maxV
    intV = int(''.join(pan))
    if k == n :
        if maxV < intV:
            maxV = intV
        return

    for i in range(720):
        if state[k][i] == 0:
            state[k][i] = intV
            break
        if state[k][i] == intV:
            return

    l = len(pan)
    for i in range(0, l -1):
        for j in range(i+1, l):
            pan[i], pan[j] = pan[j], pan[i]
            solve(k+1)
            pan[i], pan[j] = pan[j], pan[i]

t = int(input())
for tc in range(1, t+1):
    inp, n = input().split()
    pan = list(inp)
    n = int(n)
    state = [[0]*720 for _ in range(n)] #6! = 720 (6개의 카드로 나열할 수 있는 수, 순열)
    maxV = 0
    solve(0)

    print('#{} {}'.format(tc, maxV))