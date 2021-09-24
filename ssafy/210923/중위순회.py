import sys
sys.stdin = open("input1231.txt", "r")

def inorder(root):   #재귀 이용해 출력
    s = tree[root]

    if len(s) >= 2:    #왼쪽 노드가 있으면
        inorder(int(s[1]))
    print(s[0], end='')
    if len(s) >= 3:    # 오른쪽 노드가 있으면
        inorder(int(s[2]))


    # if root:
    #     inorder(int(s[1]))   #left sub tree의 root
    #     print(s[0])
    #     inorder(int(s[2]))    #right sub tree의 root


TC = 10
for tc in range(1, TC+1):
    N =int(input())
    tree = [[] for _ in range(N+1)]   #초기화
    for i in range(1, N+1):
        s = input().split()
        tree[int(s[0])] = s[1:len(s)]

    inorder(1)
    print()