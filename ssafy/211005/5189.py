import sys
sys.stdin = open("input_5189.txt","r")

# def per(k):
#     if k == n:
#         print(구해진 순열 출력)
#         sumV = 구해진 순열에 대한 배터리량 계산
#         최소값을 구한다
#     for i in range(n):
#         방문 안 한 경우:
#             방문표시
#             per(k+1)
#             방문 원복
# res[0] = 0
# visited[0] = 방문표시
# per(1)

def solve(k):
    global minV
    if k == n:
        res[-1] = 0
        sumV = 0
        for i in range(n):
            st = res[i]
            ed = res[i+1]
            sumV += lst[st][ed]
        if minV > sumV:
            minV = sumV
        return

    for i in range(n):
        if not visited[i]:
            res[k] = i
            visited[i] = True
            solve(k+1)
            visited[i] = False



t = int(input())
for tc in range(1, t+1):
    n = int(input())
    lst = [list(map(int,input().split())) for _ in range(n) ]

    res = [-1] * (n+1)   #순열구해서 넣기
    res[0] = 0
    visited = [False] * n
    res[0] = 0
    visited[0] = True
    minV = 123456789
    solve(1)

    print('#{} {}'.format(tc, minV))