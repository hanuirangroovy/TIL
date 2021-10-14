import sys
sys.stdin = open("input_5249.txt","r")

def dijk():
    s = 0
    D[s][0] = 0
    U.append(s)
    for i in range(n+1):
        if G[s][i] > 0:     # 예 a->b : s:a, i:b
            D[i][0] = G[s][i]
    while len(U) <= n:
        minV = 1000000
        for i in range(n + 1):
            if i in U: continue
            if D[i][0] < minV:
                minV = D[i][0]
                curV = i
        U.append(curV)
        for i in range(n + 1):
            if i in U: continue
            if G[curV][i] > 0:
                if D[i][0] > G[curV][i]:
                    D[i][0] = G[curV][i]    # G[curV]에서 가장 작은값
                    D[i][1] = curV

t = int(input())
for tc in range(1, t+1):
    n, e = map(int, input().split())
    G = [[0]*(n+1) for _ in range(n+1)]
    for _ in range(e):
        n1, n2, w = map(int, input().split())
        G[n1][n2] = w
        G[n2][n1] = w

    D = [[1000000, 0] for _ in range(n + 1)]  # 0:key, 1:pi
    U = []
    dijk()
    result = 0
    for i in range(len(D)):
        result += D[i][0]
    print('#{} {}'.format(tc, result))