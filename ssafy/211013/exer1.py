#반복문 : 모든 vertex를 한번만 방문하여 출력
visited[8] = False * 8
def dfs_f(s):
    st = []
    st.append(s)
    visited[s] = True
    while st: #len(st)>0: 스택에 데이터가 있는 동안에
        s = st.pop()  #정확한 의미는 s = st.pop(-1)
        print(s, end = ' ')
        for i in grp2[s]:
            if not visited[i]:
                st.append(i)
                visited[i] = True

    return

#dfs재귀 : 모든 vertex를 한번만 방문하여 출력
def dfs_r(s):
    visited[s] = True
    print(s,end = ' ')
    for i in grp2[s]:
        if not visited[i]:
            dfs_r(i)

#bfs 반복문 : 모든 vertex를 한번만 방문하여 출력
def bfs(s):
    return
s = "1, 2, 1, 3, 2, 4, 2, 5, 4, 6, 5, 6, 6, 7, 3, 7"
lst = list(map(int,s.split(',')))
print(len(lst),lst) #16 [1, 2, 1, 3, 2, 4, 2, 5, 4, 6, 5, 6, 6, 7, 3, 7]

#인접행렬
grp1 = [[0] * 8 for _ in range(8)]
for i in range(0,len(lst),2):
    s1 = lst[i]
    s2 = lst[i+1]
    grp1[s1][s2] = 1
    grp1[s2][s1] = 1
print(grp1)

#인접리스트
grp2 = [[] for _ in range(8)]
for i in range(0,len(lst),2):
    s1 = lst[i]
    s2 = lst[i+1]
    grp2[s1].append(s2)
    grp2[s2].append(s1)

print(grp2)

visited=[False]*8
dfs_f(1)
print()
visited=[False]*8
dfs_r(1)
print()
bfs(1)