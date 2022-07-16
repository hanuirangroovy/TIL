import sys
sys.stdin = open("2.txt","r")

n = int(input())
list_n = list(map(int, input().split()))
m = int(input())
list_m = list(map(int, input().split()))

arr = [0] * 1000001

for i in list_n:
    arr[i] = 1

result = []

for i in list_m:
    if arr[i] == 1:
        result.append("yes")
    else:
        result.append("no")
for i in result:
    print(i, end = ' ')




