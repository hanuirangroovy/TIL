import sys
sys.stdin = open("3.txt", "r")

def dduk(max_d, list_d, n):
    result = 0
    for i in list_d:
        if i >= max_d:
            result += i - max_d
    if result == n[1]:
        print(max_d)
    else:
        result = 0
        dduk(max_d-1, list_d, n)


n = list(map(int, input().split()))
list_d = list(map(int, input().split()))

max_d = 0

# max_d 구하기
for i in list_d:
    if i >= max_d:
        max_d = i

dduk(max_d, list_d, n)
