import sys
sys.stdin = open("input_2477.txt","r")


n = int(input())
lst = [list(map(int,input().split())) for _ in range(6)]
lst_l = []
for i in range(6):
    lst.append(lst[i])

# [[3, 20], [1, 100], [4, 50], [2, 160], [3, 30], [1, 60], [3, 20], [1, 100], [4, 50], [2, 160], [3, 30], [1, 60]]


lst_b = []
for i in range(7):
    # i,i+2 같고 i+1,i+3 같을 경우
    if lst[i][0] == lst[i+2][0] and lst[i+1][0]==lst[i+3][0]:
        rec_s = lst[i+1][1] * lst[i+2][1]
        lst_b.append(lst[i+4][1])
        lst_b.append(lst[i+5][1])

#길이만 담기
rec_b = lst_b[0] * lst_b[1]
siz = rec_b - rec_s
result = siz*n
print(result)

