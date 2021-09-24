import sys
sys.stdin = open(f"input_5174.txt","r")

def preorder(root):
    global cnt
    if tree[root][0]:    #root 가 가용한 노드인가?
        cnt += 1
        #visit(root)
        preorder(tree[root][0])
    if tree[root][1]:
        cnt += 1
        preorder(tree[root][1])
    if tree[root][0]== 0 or tree[root][1] == 0:
        return cnt

TC = int(input())
for tc in range(1, TC+1):
    E, N = map(int, input().split())
    s = list(map(int, input().split()))
    tree = [[0,0] for _ in range(E+2)]

    for i in range(0, len(s),2):
        p,c = s[i], s[i+1]
        if tree[p][0] == 0: #처음 나온거면
            tree[p][0] = c
        else:
            tree[p][1] = c

    cnt = 1
    preorder(N)

    print('#{} {}'.format(tc, cnt))