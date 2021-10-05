import sys
sys.stdin = open("input_5188.txt","r")

# def solve(curX, curY):
#     if curX, curY가 최종지점에 도착했으면:
#         경로의 합을 구한다.
#         if minV 합하고 비교해서 minV를 업데이트
#             return
#     if curX+1로 갈 수 있으면
#       solve(curX+1,curY)
#     if curY+1로 갈 수 있으면
#       solve(curX, curY+1)

# def solve(curX, curY, sumV):
#     if curX, curY가 최종지점에 도착했으면:
#         if minV, sumV하고 비교해서 minV를 업데이트
#             return
#     if curX+1로 갈 수 있으면
#         solve(curX+1,curY, sumV+오른쪽의 값)
#     if curY+1로 갈 수 있으면
#         solve(curX, curY+1, sumV+아래의 값)

def solve(curX, curY, sumV):
    global minV
    if curX ==  n-1 and curY == n-1:
        if minV > sumV:
            minV = sumV
        return
    #오른쪽
    if curX+1 < n:
        solve(curX+1,curY,sumV+lst[curY][curX+1])
    #아래
    if curY+1 < n:
        solve(curX, curY+1, sumV+lst[curY+1][curX])


t = int(input())
for tc in range(1, t+1):
    n = int(input())
    lst = [list(map(int,input().split())) for _ in range(n)]
    minV = n*n*10
    solve(0,0,lst[0][0])

    print('#{} {}'.format(tc, minV))