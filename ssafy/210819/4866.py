import sys
sys.stdin = open(f'input_4866.txt', "r")

t = int(input())
for tc in range(1, t+1):
    s = input()
    lst = []
    for c in s:
        if c == '(':
            #스택에 넣는다
            lst.append(c)
        if c == '{':
            #스택에 넣는다
            lst.append(c)
        if c == ')':
            # 스택에 정보가 있는지 보고
            # 스택의 마지막 top에 있는 정보가 '('인지 확인
            if len(lst) == 0:
                result = 0
            elif lst.pop() != '(':
                result = 0
            else:
                result = 1
        if c == '}' :
            if len(lst) == 0:
                result = 0
            elif lst.pop() != '(':
                result = 0
            else:
                result = 1


    # 스택에 데이터가 남아 있으면 fail
    if len(lst):
        result = 0
    else:
        result = 1


print('#{} {}'.format(tc, result))