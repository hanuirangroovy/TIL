import sys
sys.stdin = open('input_1223.txt', "r")

def step1(s):
    isp = {'*':2, '+':1}
    t = []
    ST = []
    for c in s:
        if c.isdecimal():
            t.append(c)
        else:
            if not ST or isp[ST[-1]] < isp[c]:
                ST.append(c)
            else:
                while ST and isp[ST[-1]] >= isp[c]:
                    t.append(ST.pop())
                ST.append(c)
    while ST:
        t.append(ST.pop(-1))

    return t

def step2(t):
    ST = []
    for c in t:
        if c.isdecimal():
            ST.append(c)
        else:
            n1 = int(ST.pop())
            n2 = int(ST.pop())
            if c == '+':
                ST.append(n1+n2)
            if c == '*':
                ST.append(n1*n2)

    return ST.pop()


T = 10
for tc in range(1,T):
    n = int(input())
    s = input()
    t = step1(s)
    result = step2(t)
    print('#{} {}'.format(tc, result))
