#s = input()
s = 2+3*4/5
ST = []
for c in s:
    # 방법1. 연산자의 경우 stack 안에 push
    if c in ['+','-','*','/']:
        ST.append(c)
    else:
        print(c)


    # 방법2
    if c.isdecimal():
        print(c)
    else:
        ST.append(c)

    #stack 에 있는 거 전부 출력. 들어간 거 빼면서 출력해야.
    # for i in range(ST):     <- 절대 안됨.
    #print(ST(i))               xxxxxxxxx


    while ST:
        print(ST.pop(-1))

    #한 줄에 나오게 하려면
    while ST:
        print(ST.pop(-1), end = "")
