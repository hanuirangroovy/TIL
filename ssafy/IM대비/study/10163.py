import sys
sys.stdin = open("input_10163.txt","r")

n = int(input())

lst = [list(map(int, input().split())) for _ in range(n)]
arr = [[0]*1002 for _ in range(1002)]
for i in range(n):
    for j in range(lst[i][0],lst[i][0]+lst[i][2]):
        for k in range(lst[i][1],lst[i][1]+lst[i][3]):
            arr[j][k] = i+1
result = [0]*n
for i in range(n):
    cnt = 0
    for j in range(1002):
        for k in range(1002):
            if arr[j][k] == i+1:
                cnt += 1
    result[i] = cnt

for i in result:
    print(i)
