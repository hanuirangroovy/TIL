import sys
sys.stdin = open("GNS_test_input.txt", "r")

t = int(input())
for tc in range(1, t+1):
    num = input().split()
    lst = list(map(str, input().split()))

    dict_num = {'ZRO' : 0, 'ONE' : 1, 'TWO' : 2, 'THR' : 3, 'FOR' : 4, 'FIV' : 5, 'SIX' : 6, 'SVN' : 7, 'EGT' : 8, 'NIN' : 9}
    for i in range(len(lst)):
        lst[i] = dict_num[lst[i]]

    for i in range(len(lst) - 1, 0, -1):
        for j in range(i):
            if lst[j] > lst[j + 1]:
                lst[j], lst[j + 1] = lst[j + 1], lst[j]


    dict_tc = {0 : 'ZRO', 1 : 'ONE', 2 : 'TWO', 3 : 'THR', 4 : 'FOR', 5 : 'FIV', 6 : 'SIX', 7 : 'SVN', 8 : 'EGT', 9 : 'NIN'}
    for i in range(len(lst)):
        lst[i] = dict_tc[lst[i]]

    print(f'#{tc}')
    for i in range(len(lst)):
        print(lst[i], end=' ')