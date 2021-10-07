def partitionH(l,r):
    p = l
    i = l
    j = r

    while i<j:
        while i<r and lst[i] <= lst[p]:
            i += 1
        while j>l and lst[j] >= lst[p]:
            j -= 1
        if i<j:
            lst[i], lst[j] = lst[j], lst[i]

    lst[p], lst[j] = lst[j], lst[p]
    return j


def partitionL(l,r):
    p=r
    i = l-1

    for j in range(l,r):
            if lst[j] < lst[p]:
            i += 1
            lst[i], lst[j] = lst[j], lst[i]
    lst[p], lst[i+1] = lst[i+1], lst[p]
    return i+1