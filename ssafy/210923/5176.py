import sys
sys.stdin = open(f"input_5176.txt","r")

def inorder(root):
    global value

    if root <= N:  # 빠져나가는 조건
        inorder(root*2) #root 의 왼쪽 서브트리의 root
        #visit(root)
        tree[root] = value
        value += 1
        inorder(root*2+1) #root의 오른쪽 서브트리의 root



TC = int(input())
for tc in range(1, TC+1):
    N=int(input())
    tree = [0] * (N+1)

    value = 1
    inorder(1)
    # print(tree)
    # print(tree[1], tree[N/2])
    print('#{} {} {}' .format(tc, tree[1], tree[N//2]))