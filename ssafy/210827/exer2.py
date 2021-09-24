'''
   조상찾기
   while par[c]:  부모가 있으면
       print(par[c])
       c <- par[c]  다시 자식으로 두고 반복
   '''

def pre_order(n):
    if n:     #유효한 정점이면
        #print(n)               # 부모처리
        pre_order(left[n])     #n의 왼쪽자식으로 이동
        pre_order(right[n])    #돌아오면 오른쪽 자식으로 이동

def in_order(n):
    if n:
        in_order(left[n])
        print(n)
        in_order(right[n])

def post_order(n):
    if n:
        post_order(left[n])
        post_order(right[n])
        print(n)

V = int(input())
edge = list(map(int, input().split()))
E = V - 1   #V개의 정점이 있는 트리의 간선 수
left = [0]*(V+1)     #부모를 인덱스로 자식번호 저장
par = [0]*(V+1)   #자식을 인덱스로 부모번호 저장
right = [0]*(V+1)

for i in range(E):
    p, c = edge[i*2], edge[i*2+1]
    if left[p]==0:     #p의 왼쪽자식이 없으면
        left[p] = c
    else:              #왼쪽자식이 있으면 오른쪽자식으로 저장
        right[p] = c
    par[c] = p         # (1) 조상을 찾는데 사용
                       # (2) root 찾기

c = 6
while par[c]:
    print(par[c])
    c = par[c]

# 부모가 없으면 root
root = 1
while par[root]:   #root로 추정한 정점이 부모가 있으면
    root += 1
print(root)