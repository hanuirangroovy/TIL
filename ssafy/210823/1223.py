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
            #연산자의 우선순위에 의한 작업
            #ST[-1]은 ST에 데이터가 없으면 오류 => 해결필요
            if len(ST) == 0 or isp[ST[-1]] < isp[c]:
                ST.append(c)
            # elif isp[ST[-1]] < isp[c]:
            #     ST.append(c)
            else:
                while ST and isp[ST[-1]] >= isp(c):
                    t.append(ST.pop())


    while ST:
        t.append(ST.pop(-1))

    return t

def step2(t):
    ST = []
    for c in t:
        #숫자면 ST에 넣고
        if c.isdecimal():
            ST.append(c)
        else:
            n1 = ST.pop()
            n2 = ST.pop()
            # 연산자면 ST에서 숫자를 pop해서 연산 후 결과를 ST에 넣는다.
            if c == '+':
                ST.append(n1+n2)
            if c == '*':
                ST.append(n1*n2)

    return ST.pop()
s = input()
t = step1(s)
result = step2(t)
for tc in range(1, 11):
    N = int(input())
    print('#{} {}'.format(tc, result))



