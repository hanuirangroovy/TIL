import sys
sys.stdin = open("input_7465.txt","r")

def make_set(x):
    p[x] = x
    rank[x] = 0

def find_set(x):
    if p[x] != x:
        p[x] = find_set(p[x])
    return p[x]

def union(x,y):
    px = find_set(x)
    py = find_set(y)

    if rank[px] > rank[py]:
        p[py] = px
    else:
        p[px] = py
        if rank[px] == rank[py]:
            rank[py] += 1

t = int(input())

for tc in range(1, t+1):
    v, e = map(int, input().split()) # v:마을 사람수, e:마을사람 관계수

    p = [0] *(v+1)
    rank = [0]*(v+1)

    for i in range(v+1):
        make_set(i)

    # p = list(range(v+1))
    # p = [i for i in range(v+1)]

    for i in range(e):
        a, b = map(int, input().split())
        union(a,b)

    ans = 0

    for i in range(1,v+1):
        if i == p[i]:
            ans += 1

    print('#{} {}'.format(tc,ans))