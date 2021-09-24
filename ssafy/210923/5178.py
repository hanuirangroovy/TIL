import sys
sys.stdin = open(f"input_5178.txt","r")

TC = int(input())
for tc in range(1, TC+1):
    N, M, K = map(int,input().split())
    tree = [0] * (N+1)

    for i in range(M):
        p, c = map(int, input().split())
        tree[p] = c

    for i in range(N, 0, -1):
        if i // 2 >0:
            tree[i//2] += tree[i]


    print('#{} {}'.format(tc, tree[K]))
