import sys
sys.stdin = open("input_5249.txt","r")

def find_set(x):
    while p[x] != x:
        x = p[x]
    return x

def union(x,y):
    p[find_set(y)] = find_set(x)

t = int(input())

for tc in range(1,t+1):
    v, e = map(int,input().split()) #v:마지막 번호입니다. (0번부터 시작), e:간선의수

    edges = [list(map(int,input().split())) for _ in range(e)]
    edges.sort(key=lambda x:x[2])

    # edges = []
    #
    # for _ in range(e):
    #     n1, n2, w = map(int, input().split())
    #     edges.append(w, n1, n2)
    #     edges.sort()

    p = list(range(v+1)) #make-set

    cnt = 0  # 간선을 선택한 횟수
    ans = 0  # 가중치를 더한 값
    idx = 0  # edges 인덱스

    # while cnt < v:
    #     n1 = edges[idx][0]
    #     n2 = edges[idx][1]
    #
    #     if find_set(n1) != find_set(n2):
    #         union(n1,n2)
    #         cnt += 1
    #         ans += edges[idx][2]
    #
    #     idx += 1

    for n1, n2,w in edges:
        if find_set(n1) != find_set(n2):
            cnt += 1
            ans += w
            union(n1,n2)
            if cnt == v: break

    print("#{} {}".format(tc,ans))

###########################################
def prim():
    key = [987654321] * (v+1)
    visited = [0] * (v+1)
    key[0] = 0

    for _ in range(v):
        min_idx = -1
        min_value = 987654321
        #최소값을 찾자
        for i in range(v+1):
            if not visited[i] and key[i] < min_value:
                min_idx = i
                min_value = key[i]

        visited[min_idx] = 1
        # 갱신할 수 있으면 전부다 갱신
        for i in range(v+1):
            if not visited[i] and adj_arr[min_idx][i] < key[i]:
                key[i] = adj_arr[min_idx][i]

    return sum(key)


t = int(input())
for tc in range(1,t+1):
    v, e = map(int, input().split())

    #임의 큰 값으로 초기화된 값을 넣어놓자
    adj_arr = [[987654321]*(v+1) for _ in range(v+1)]

    for i in range(e):
        n1, n2, w = map(int,input().split())
        adj_arr[n1][n2] = adj_arr[n2][n1] = w

    print("#{} {}".format(tc, prim()))
