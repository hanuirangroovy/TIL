import sys
sys.stdin = open("input_16960.txt","r")



n, m = map(int, input().split())
light = [0] * (m+1)
s_lst = []
for i in range(n):
    s_lst.append(list(map(int, input().split())))
    # s_lst
    # [[3, 1, 3, 5], [1, 2], [3, 3, 4, 5], [1, 1]]
    # [[2, 1, 3], [1, 2], [2, 3, 4], [2, 3, 5]]
    # [[1, 1], [0], [0], [0], [0], [0], [0], [0], [0], [1, 1]]
for i in range(n):
    if len(s_lst[i]) != 1:
        for j in range(1,len(s_lst[i])):
            light[s_lst[i][j]] += 1
            # light
            # [0, 2, 1, 2, 1, 2]
            # [0, 1, 1, 3, 1, 1]
            # [0, 2]
res = 0
for i in range(n):
    for j in s_lst[i]: #j:3,1,3,5
        light[j] -= 1
    light[s_lst[i][0]] += 1

    cnt = 0
    for j in range(len(light)):
        if light[j] >= 1:
            cnt += 1
    if cnt == m:
        res = 1
        print(res)
        exit()
    for j in s_lst[i]: #j:3,1,3,5
        light[j] += 1
    light[s_lst[i][0]] -= 1
print(res)

