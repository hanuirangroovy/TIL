import sys
sys.stdin = open("input_2605.txt","r")

n = int(input())
lst = list(map(int,input().split()))
result = []
for i in range(n):
    if lst[i] >= 1:
        result.insert(-lst[i], i+1)
    if lst[i] == 0:
        result.insert(i, i + 1)
for i in result:
    print(i, end=" ")