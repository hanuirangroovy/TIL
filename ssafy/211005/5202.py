import sys
sys.stdin = open("input_5202.txt","r")

t = int(input())
for tc in range(1, t+1):
    n = int(input())
    time = [list(map(int, input().split())) for _ in range(n)]
    #[[20, 23], [17, 20], [23, 24], [4, 14], [8, 18]]

    #1. 시작 시간에 따라 정렬
    time_s = sorted(time)
    #[[4, 14], [8, 18], [17, 20], [20, 23], [23, 24]]
    #2. 앞의 끝 시간이 뒷 순서 시작시간보다 늦다면 cnt x
    for i in range(n):
        start = time_s[i][0]
        end = time_s[i][1]
        # if start end:
        # cnt += 1
    print(time_s)
    #print('#{} {}'.format(tc, cnt))