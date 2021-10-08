import sys
sys.stdin = open("input_1859.txt","r")

# for tc in range(1, T + 1) :
#     N = int(input())
#     price = list(map(int, input().split())) # price[i] : i 번째 날의 (판매 / 구입) 가격
#
#     ans = 0
#     for y in range(len(price)):
#         # y -> 제일 큰 price
#         max_benefit = 0
#         for x in range(y+1, len(price)):
#             #max_benefit vs price[x] 이가격에 price[y] 를 판다  : price[x] - price[y]
#             max_benefit = max(max_benefit, price[x] - price[y])
#         ans += max_benefit
#
#     print("#{} {}".format(tc, ans))


# t = int(input())
# for tc in range(1, t+1):
#     n = int(input())
#     price = list(map(int, input().split()))
#     last = price[-1]
#     result = 0
#     for y in range(len(price)-1,-1,-1):
#         if last > price[y]:
#             result += last - price[y]
#         else:
#             last = price[y]
#     print("#{} {}".format(tc, result))

t = int(input())
for tc in range(1, t+1):
    n = int(input())
    price = list(map(int, input().split()))
    max_price = 0 #이 때 팔아야 제일 이득
    benefit = 0 #차익을 누적한다
    for i in range(len(price)-1,-1,-1):
        max_price = max(max_price, price[i])
        benefit += max_price - price[i]
    print("#{} {}".format(tc, benefit))