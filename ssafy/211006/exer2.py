
def prt():
    for i in range(10):
        if res[i] == 1:
            print(lst[i], end=' ')
    print()

#부분집합 구하기
def powerset(k, sumV):
    if sumV > 10:
        return

    if k==n:
        # sumV=0
        # for i in range(n):
        #     if res[i] == 1:
        #         sumV += lst[i]
        if sumV == 10:
            prt()
        return

    res[k] = 0
    powerset(k+1, sumV)

    res[k] = 1
    powerset(k+1, sumV + lst[k])

lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
n = len(lst)
res = [-1] * n
powerset(0, 0)