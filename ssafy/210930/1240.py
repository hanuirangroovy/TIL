import sys
sys.stdin = open("input_1240.txt","r")

patt = ['0001101', '0011001', '0010011', '0111101', '0100011',
        '0110001', '0101111', '0111011', '0110111', '0001011']

t = int(input())
for tc in range(1, t+1):
    n, m = map(int, input().split())
    arr = [input() for _ in range(n)]

    #1. 위에서부터 오른쪽끝지점 찾기
    for row in range(n):
        if '1' in arr[row]:
            col = arr[row][::-1].index('1')
            break

    #2. 코드 시작점 계산
    col = m - col -56

    #3. 8개 숫자 찾기
    res = []
    for i in range(8):
        res.append(patt.index(arr[row][col:col+7]))
        col += 7
    #4. res 검증
    odd = res[0] + res[2] + res[4] + res[6]
    even = res[1] + res[3] + res[5] + res[7]
    if (odd*3 + even) % 10 == 0:
        print('#{} {}'.format(tc, odd + even))
    else:
        print('#{} {}'.format(tc, '0'))