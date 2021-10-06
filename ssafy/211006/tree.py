
def enq(n):
    global last
    last += 1
    tree[last] = n
    c = last
    p = c//2
    while p>=1 and tree[p]<tree[c]:
        tree[p], tree[c] = tree[c], tree[p]
        c = p
        p = c//2

def deq():
    global last
    tmp = tree[1]
    tree[1] = tree[last]
    last -= 1
    p = 1
    c1 = 2p
    c2 = 2p + 1
    while c1<=last:     # 자식이 하나라도 있으면
        if c2<=last:     # 자식이 둘이면
            if tree[c1]>=tree[c2] and tree[c1]>tree[p]:
                tree[c1], tree[p] = tree[p], tree[c1]
                p = c1
            elif tree[c1]<tree[c2] and tree[c2]>tree[p]:
                tree[c2], tree[p] = tree[p], tree[c2]
                p = c2
            c1 = p2
            c2 = p2+1
        else:           # 왼쪽자식만 있는 경우
            if tree[c1]>tree[p]:
                tree[c1], tree[p] = tree[p], tree[c1]
            break
    return tmp

'''
def deq():
    global last
    tmp = tree[1]
    tree[1] = tree[last]
    last -= 1
    p = 1
    c = p * 2
    while c <= last :     # 자식이 하나라도 있으면
        if c + 1<=last and tree[c] < tree[c+1]:     # 자식이 둘이면
    c += 1
        if tree[c]>tree[p]:
            tree[c], tree[p] = tree[p], tree[c]
            p = c
            c = p * 2
        else:
            break
    return tmp
'''

tree = [0]*101      # 최대 100번노드까지..  최대힙
last = 0            # 마지막 노드 번호
