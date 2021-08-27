import sys
sys.stdin = open("input_1231.txt", "r")

def in_order(n):
    if n:
        in_order(left[n])
        print(node[n],end='')
        in_order(right[n])

for tc in range(1, 11):
    N = int(input())
    node = [0] * (N + 1)
    left = [0] * (N + 1)
    right = [0] * (N + 1)
    for i in range(1,N+1):
        tree = list(input().split())
        node[i] = tree[1]
        if i*2 <= N:
            left[i] = int(tree[2])
        if i*2+1 <= N:
            right[i] = int(tree[3])
    print("#{} ".format(tc), end="")
    in_order(1)
    print()

