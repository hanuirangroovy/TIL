s1 = '()()((()))'
s2 = '(()'
s3 = '())'
s4 = '((()((((()()((()())((())))))'


ST = []
result = 'OK'
for c in s1:
    if c == '(':   #c가 왼쪽괄호일때
        ST.append(c)
    if c == ')':   # 오른쪽괄호일때:
        if len(ST) == 0:   #stack 비어있는지 확인
            result = 'ERR'
            break
        ST.pop(-1)

if len(ST) > 0:        #다돌았는데 stack data가 있을때
    result = 'ERR'
   

print(result) 