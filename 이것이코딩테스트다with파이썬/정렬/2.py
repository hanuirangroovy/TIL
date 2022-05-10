import sys
sys.stdin = open("2.txt","r")

n = int(input())
result = []
for i in range(n):
    result.append(int(input()))
ans = sorted(result, reverse=True)
for i in ans:
    print(i,end=' ')