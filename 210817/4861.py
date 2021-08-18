import sys
sys.stdin = open("input4861.txt", "r")

def isCheck(s):
    #str이 회문이면 True
    #아니면 False를 return
    st = 0
    ed = len(s) - 1
    while st < ed and s[st] == s[ed]:
        st += 1
        ed -= 1
    if st >= ed:
        return True
    return False


def CC():
    #회문을 찾아서 return
    #가로
    for row in range(N):
        for st in range(N-M+1):
            result = isCheck(ARR[row][st:st+M])
            if result:
                return ARR[row][st:st + M]


    # 세로
    for col in range(N):
        for st in range(N-M+1):
            temp_Str = ""
            for k in range(st, st+M):
                temp_str += ARR[k][col]
            result = isCheck(temp_str)
            if result:
                return temp_Str
    


TC = int(input())
for tc in range(1, TC+1):
    N, M = map(int, input().split())
    ARR = [input() for _ in range(N)]
    rst = CC()


    print('#{} {}'.format(tc, rst))

    #print(ARR)
    #print(ARR[0][0], ARR[1][0])

    #가로
    #for row in range(N):
    #    for st in range():
    #        isCheck(ARR[row][st:st+M])