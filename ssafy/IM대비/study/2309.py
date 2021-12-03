import sys
sys.stdin = open("input_2309.txt","r")

lst = []
for _ in range(9):
    lst.append(int(input()))
a = 0
b = 0
lst_sum = sum(lst)
gap = lst_sum - 100
for i in range(9):
    for j in range(9):
        if lst[i] + lst[j] == gap:
            a = lst[i]
            b = lst[j]
lst.remove(a)
lst.remove(b)
result = sorted(lst)
for i in result:
    print(i)

