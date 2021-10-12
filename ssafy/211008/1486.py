import sys
sys.stdin = open("input_1486.txt","r")


# n:점원 수, b : 선반 높이

def get_height(i, height): #i:포함되는 키,height :탑의 높이
    global min_h
    if height >= b:
        min_h = min(min_h, height)
    if i == n: return
    get_height(i+1,height) # 포함안될 때
    get_height(i+1,height+h[i]) #포함될 때


t = int(input())
for tc in range(1, t + 1):
    n, b = map(int, input().split())
    h = list(map(int, input().split()))
    min_h = 987654321
    # 시간초과
    # lst = []
    # for i in range(1<<len(h)):
    #     sub_lst = []
    #     for j in range(len(h)):
    #         if i & (1<<j):
    #             sub_lst.append(h[j])
    #     if sum(sub_lst)-b >= 0:
    #         lst.append(sum(sub_lst)-b)
    #         result = min(lst)

    get_height(0,0)
    result = min_h-b
    print("#{} {}".format(tc, result))