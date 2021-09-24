import sys
sys.stdin = open(f"input_1232.txt","r")
import math

# def posorder(root):
#     s = tree[root]
#     # if root > N:
#     #     return 0
#     if s[0] is_decimal(''):     # 숫자면
#         return s[0]
#     else:
#         v1 = posorder(int(s[1])) #root의 왼쪽의 결과
#         v2 = posorder(int(s[2]))  #root의 오른쪽의 결과
#         if s[0] == '+':
#         return v1 + v2

# def posorder2()
#     for i in range(N, 1, -1):
#         p = i//2
#         tree[p] += tree[i]

def calc(v):
    if len(tree[v]) == 2:
        return tree[v][1]
    else:
        L = calc(tree[v][2])
        R = calc(tree[v][3])

        if tree[v][1] == '+':
            return L+R
        elif tree[v][1] == '-':
            return L-R
        elif tree[v][1] == '*':
            return L*R
        elif tree[v][1] == '/':
            return L/R

TC = 10
for tc in range(1, TC+1):
    N = int(input())        #정점의 개수
#     tree = [[] for _ in range(N+1)]
#     for i in range(N):
#         s = list(input().split())
#         node = int(s[0])
#         tree[node] = s[1:len(s)]
    tree = [0] * (N+1)
    for i in range(1, N+1):
        tmp = input().split()
        tree[int(tmp[0])] = tmp

        # tmp 길이가 4일 때 0번 인덱스 : 정점번호, 1번 인덱스 : 연산자, 2번 인덱스 : 왼자번, 3번 인덱스 : 오자번
        if len(tmp) == 4:
            tree[int(tmp[0])][2] = int(tree[int(tmp[0])][2])
            tree[int(tmp[0])][3] = int(tree[int(tmp[0])][3])
        else:
            tree[int(tmp[0])][1] = int(tree[int(tmp[0])][1])

    print("#{} {}".format(tc, int(calc(1))))




    # tree = [0] * (N+1)
    #
    # for i in range(N):
    #     p, c = map(int, input().split())
    #     tree[p] = c
    # posorder(1)
    # print(tree)
    # print(tree[L])
