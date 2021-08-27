'''
13 <- 정점의 개수
1 2 1 3 2 4 3 5 3 6 4 7 5 8 5 9 6 10 6 11 7 12 11 13
6
1 2 1 3 2 4 3 5 3 6
6
2 1 1 3 2 4 3 5 3 6
'''
def pre_order(n):
    global cnt
    if n:     #유효한 정점이면
        cnt += 1            # print(n) 부모처리
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
    par[c] = p



cnt = 0
pre_order(3)
print(cnt) #3을 root로 하는 서브트리의 정점개수는?
print(cnt-1) #3의 자손의 수