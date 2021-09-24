#부분집합 10개만들기
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
t = [0] * 11
def powerset(k, input, sumV):
    if sumV > 10:
        return

    if k==input:
        if sumV = 10:
            for i in range(3):
                if t[i]:
                    print(a[i],end = " ")
            print()


else:
    t[k] = True
    powerset(k+1, input, sumV + a[k])
    t[k] = False
    powerset(k + 1, input, sumV)

powerset(0, 10, 0)

def per(k):
    if k == 3:
        print(t)
        for i in range(3):
            print(a[t[i]], end = " ")
        print()
    else:

