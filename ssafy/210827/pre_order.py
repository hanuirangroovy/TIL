def pre_order(root):
    if root <= N:
        print(root, tree[root])
        pre_order(root*2)
        pre_order(root*2+1)

def pre_order2(root): #왼쪽으로 보내기 전 루트보다 작을 때만 보내자
    print(root, tree[root])
    if root*2 <= N:
        pre_order(root*2)
    if root*2+1 <= N:
        pre_order(root*2+1)

N = 10
tree = [i*100 for i in range(11)]
pre_order(1)

