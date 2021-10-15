import sys
sys.stdin = open("input_1795.txt","r")

# def dijstra():
#     pass

t = int(input())
for tc in range(1,t+1):
    n, m, x = map(int,input().split()) #n:사람수, m:간선수, x:생일파티집

    adj1 = [[987654321] *(n+1) for _ in range(n+1)] #원래인력 (진출)
    adj2 = [[987654321] *(n+1) for _ in range(n+1)]   #뒤집은 인력 (진입)

    for _ in range(m):
        x, y, c = map(int,input().split())  #c:가중치
        adj1[x][y] = c
        adj2[y][x] = c

    dist1 = [987654321] * (n+1)
    dist2 = [987654321] * (n+1)

    #다익스트라 호출

    max_value = 0
    for i in range(1,n+1):
        if dist1[i] + dist2[i] > max_value:
            max_value =  dist1[i] + dist2[i]

    print('#{} {}'.format(tc, max_value))
