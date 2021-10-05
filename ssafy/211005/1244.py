import sys
sys.stdin = open("input_1244.txt","r")

def solve(k):
    global maxV

    if k == n :
        intV = int(''.join(pan))
        if maxV < intV:
            maxV = intV
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
    maxV = 0
    solve(0)

    print('#{} {}'.format(tc, maxV))