
N = 13
inpst = '1 2 1 3 2 4 3 5 3 6 4 7 5 8 5 9 6 10 6 11 7 12 11 13'
lst = list(map(int, inpst.split()))
tree = [[0] * 2 for _ in range(N+1)]
for i in range(0, len(lst), 2):
    p = lst[i]
    c = lst[i+1]

    #조건에 따라 선택적으로 입력되도록
    tree[p][0] = c
    tree[p][1] = c

