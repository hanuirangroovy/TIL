import sys
sys.stdin = open("input_5186.txt","r")


tc = int(input())
for tc in range(1, tc+1):
    n = float(input())
    c = 1

    res = ''
    found = False
    for i in range(12):
        c = c*0.5
        if n == c:
            res += '1'
            found = True
            break
        if n>=c:
            n = n-c
            res += '1'
        else:
            res += '0'
    if found:
        print('#{} {}'.format(tc, res))
    else:
        print('#{} {}'.format(tc, 'overflow'))