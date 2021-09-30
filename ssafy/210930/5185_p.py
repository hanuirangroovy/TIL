import sys
sys.stdin = open("input_5185.txt","r")

def hexToBin(hexV):
    #1. 16진수를 10진수
    if hexV.isdigit():
        numV = int(hexV)
    else:
        numV = ord(hexV) - ord('A') + 10
    #2. 10진수를 2진수 문자열
    # numV의 j번째 비트를 확인 numV & 1<<j
    res  = ''
    for j in range(3, -1, -1):
        if numV & 1 << j:
            res += '1'
        else:
            res += '0'
    return res



TC = int(input())
for tc in range(1, TC + 1):
    N, M = input().split()

    res = ''
    for i in range(int(N)):
        res += hexToBin(M[i])

    print('#{} {}'.format(tc, res))
