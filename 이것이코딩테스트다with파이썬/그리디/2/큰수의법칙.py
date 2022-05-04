# 2019 국가 교육기관 코딩 테스트 / 큰 수의 법칙

import sys
sys.stdin = open("2.txt","r")

n, m, k = map(int,input().split())
list = sorted(list(map(int, input().split())))
max_list = list[-1]
second_list = list[-2]

second_sum = m//k
max_sum = m - second_sum

result = max_list*max_sum + second_list*second_sum

print(result)