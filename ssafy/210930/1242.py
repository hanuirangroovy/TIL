import sys
sys.stdin = open("input_1242.txt","r")

patt = [211, 221, 122, 411, 132, 231, 114, 312, 213, 112]

def hexToBinStr(arr):
    arr = arr.replace('0', '0000')
    arr = arr.replace('1', '0001')
    arr = arr.replace('2', '0010')
    arr = arr.replace('3', '0011')
    arr = arr.replace('4', '0100')
    arr = arr.replace('5', '0101')
    arr = arr.replace('6', '0110')
    arr = arr.replace('7', '0111')
    arr = arr.replace('8', '1000')
    arr = arr.replace('9', '1001')
    arr = arr.replace('A', '1010')
    arr = arr.replace('B', '1011')
    arr = arr.replace('C', '1100')
    arr = arr.replace('D', '1101')
    arr = arr.replace('E', '1110')
    arr = arr.replace('F', '1111')

    return arr

tc = int(input())
for tc in range(1, tc+1):
    n, m = map(int, input().split())
    arr = [input() for _ in range(n)]
    for i in range(n):
        arr[i] = hexToBinStr(arr[i][0:m])

    sumV = 0

    #1. 위에서부터 오른쪽끝지점을 찾는다 => 여러개 찾는 걸로
    for row in range(1, n):
        if arr[row].find('1') < 0:
            continue

        col = m*4 -1
        while col > 56:
            if arr[row][col] == '1' and arr[row-1][col] == '0':
                res = []
                for i in range(8):
                    cnt1 = cnt2 = cnt3 = 0
                    while arr[row][col] == '1':
                        cnt1 += 1
                        col -= 1
                    while arr[row][col] == '0':
                        cnt2 += 1
                        col -= 1
                    while arr[row][col] == '1':
                        cnt3 += 1
                        col -= 1
                    while col >=0 and arr[row][col] == '0':
                        col -= 1

                    r = min(cnt1, cnt2, cnt3)
                    tnum = patt.index(cnt3//r*100 + cnt2//r*10 + cnt1//r)
                    res.insert(0,tnum)

                oddV = res[0] + res[2] + res[4] + res[6]
                evenV = res[1] + res[3] + res[5] + res[7]

                if (oddV*3 + evenV) % 10 == 0:
                    sumV += sum(res)
            else:
                col -= 1

    print('#{} {}'.format(tc, sumV))
