import sys
sys.stdin = open("input_1970.txt","r")

smarket = [50000, 10000, 5000, 1000, 500, 100, 50, 10]
cnt = [0] * len(smarket)
t = int(input())
for tc in range(1, t + 1):
    money = int(input())
    for i in range(len(smarket)):
        cnt[i] = money // smarket[i]
        money = money % smarket[i]

    print("#{}".format(tc))
    print(*cnt)