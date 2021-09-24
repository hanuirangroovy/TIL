import sys
sys.stdin = open("input_5177.txt","r")

def makeT(idx):
    if idx ==1:
        return
    if tree[idx] < tree[idx//2]:  #idx에 있는 데이터의 우선순위 > 부모노드에 있는 데이터의 우선수위이면 교환
        tree[idx], tree[idx//2] = tree[idx //2], tree[idx]
        makeT(idx//2)

def getSum():
    sumV = 0
    idx = N//2
    while idx>=1:
        sumV += tree[idx]
        idx //= 2
    return sumV

def getSum2(idx):  ##재귀로
    global sumV2
    if idx:
        sumV2 += tree[idx]
        getSum2(idx//2)




TC = int(input())
for tc in range(1, TC+1):
    N=int(input())
    lst = [0] + list(map(int, input().split()))
    tree = [0] * (N+1)
    for i in range(1, N+1):
        tree[i] = lst[i]
        makeT(i)

    # print(tree)
    # print(getSum())

    sumV2 = 0
    getSum2(N//2)
    print('#{} {}'.format(tc, sumV2))