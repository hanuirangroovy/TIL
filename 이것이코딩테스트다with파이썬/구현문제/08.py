import sys
sys.stdin = open("08.txt","r")

tc = int(input())
for t in range(tc):
    s = sorted(input())

    res_n = 0
    result = ''
    for i in s:
        #if i == '0' or i == '1' or i == '2' or i == '3' or i == '4' or i == '5' or i == '6' or i == '7' or i == '8' or i == '9':
        if 48 <= ord(i) <= 57:
            res_n += int(i)
        else:
            result = result + i
    print(s)
    print(result + str(res_n))
