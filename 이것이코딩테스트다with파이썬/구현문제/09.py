# https://school.programmers.co.kr/learn/courses/30/lessons/60057
import sys
sys.stdin = open("09.txt","r")

tc = int(input())

for t in range(tc):
    s = input()

    n_s = 0

    if len(s) % 2 == 1:
        n_s = int((len(s)-1) / 2)
    else:
        n_s = int(len(s)/2)


    for i in range(1, n_s+1):  # i: 슬라이스 간격
        list_s = []
        for j in range():
            list_s.append(s[j:len(s):i])


    print(list_s)