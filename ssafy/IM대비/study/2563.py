import sys
sys.stdin = open("input_2563.txt","r")


# n = int(input())
# lst = [list(map(int,input().split())) for _ in range(n)]
# lst_x = []
# lst_y = []
# for i in range(n):
#     for j in range(n):
#         if lst[i][0]+10 - lst[j][0] > 0:
#             if lst[i][1]+10 - lst[j][1] > 0:
#                 if lst[i][0]+10 - lst[j][0] <10 or lst[i][1]+10 - lst[j][1] <10:
#                     lst_x.append(lst[i][0]+10 - lst[j][0])
#                     lst_y.append(lst[i][1] + 10 - lst[j][1])
# for i in lst_x:
#     if i>10:
#         lst_x.remove(i)
# for i in lst_y:
#     if i>10:
#         lst_y.remove(i)
# result = 0
# for i in lst_x:
#     for j in lst_y:
#         result += i*j
# print(n*100-result)


n = int(input())
lst = [list(map(int,input().split())) for _ in range(n)]
arr = [[0]*100 for _ in range(100)]
for i in range(n):
    for j in range(lst[i][0],lst[i][0]+10):
        for k in range(lst[i][1],lst[i][1]+10):
            arr[j][k] = 1
cnt = 0
for i in range(100):
    for j in range(100):
        if arr[i][j] == 1:
            cnt += 1
print(cnt)