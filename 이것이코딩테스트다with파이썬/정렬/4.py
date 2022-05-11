import sys
sys.stdin = open("4.txt","r", encoding='UTF8')

n, k = map(int, input().split())
list_a = sorted(list(map(int,input().split())))
list_b = sorted(list(map(int,input().split())))

for i in range(1,k+1):
    list_a[i-1], list_b[-i] = list_b[-i], list_a[i-1]

result = 0
for i in range(n):
    result += list_a[i]

print(result)