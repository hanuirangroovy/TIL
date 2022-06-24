import sys
sys.stdin = open("07.txt","r")

TC = int(input())
for tc in range(TC):
    n = input()
    len_n = int(len(n))
    half_n = int((len(n))/2)
    first_n = str(n[0:half_n])
    last_n = str(n[half_n:len_n])

    res_a = 0
    res_b = 0

    for j in first_n:
        res_a += int(j)
    for j in last_n:
        res_b += int(j)

    if res_a == res_b:
        print("LUCKY")
    else:
        print("READY")
