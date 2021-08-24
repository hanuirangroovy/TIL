def per(k):
    global minV
    if k == N:
        #print(t)
        # sumV = t를 기준으로 이차원배열에서 합을 구한다.
        # sumV = 0
        # for i in range(N):
        #     sumV += ARR[i][t[i]]
        if minV > sumV:
            minV = sumV
    else:
        for i in range(N):
            if not visited[i]:
                visited[i] = True
                t[k] = i
                per(k+1, sumV +ARR[k][i])
                visited[i] = False

t = [-1] * N
visited = [False] * N
minV = 10*N  #가장 큰 값
