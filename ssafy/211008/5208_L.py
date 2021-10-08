import sys
sys.stdin = open("input_5208.txt","r")

# idx : 현재 내가 있는 버스 정류장 번호
# e : 잔여 배터리
# c : 지금까지의 교환횟수
def move(idx, e, c):
    global ans
    if idx == bus_stop[0]:
        if ans > c:
            ans = c
    else:
        #배터리를 교체하지 않고 내려보내기
        if e > 0:
            move(idx+1, e-1, c)
        #배터리를 교체하고 내려보내기
        if c < ans:
            move(idx+1, bus_stop[idx]-1, c+1)

        move(idx+1, bus_stop[idx]-1, c+1)


t = int(input())
for tc in range(1, t+1):
    bus_stop = list(map(int, input().split())) #0번 인덱스 : 정류장수, 1~:해당 번호의 정류장에 있는 충전기
    ans = 987654321

    move(2, bus_stop[1]-1,0)

    print("#{} {}".format(tc,ans))