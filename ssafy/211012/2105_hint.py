import sys
sys.stdin = open("input_2105.txt","r")

#반복을 이용하는 경우
def solve1():
    for i in range(n-1):
        for j in range(n-1):
            for a in range(n-1):
                for b in range(n-1):
                    #좌중에서 중상으로
                    #중상에서 우중
                    #우중에서 하중으로
                    #하중에서 좌중으로
                    #길이확인

# 재귀를 이용하는 방법
def solve2():
    if 시작점으로 돌아왔는지:
        길이확인
    if 갈 수 있는지 확인
        solve2(방향유지)
    if
    solve2(방향변경)

res = [-1] * m
t = [0, 1, 2, 3]
combi(n, m, 0, 0)