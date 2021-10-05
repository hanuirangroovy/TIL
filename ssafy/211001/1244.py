import sys
sys.stdin = open("input_1244.txt","r")

t = int(input())
for tc in range(1,t+1):
    lst = input().split()
    num = list(lst[0])
    cnt = int(lst[1])
    # 1. 가장 큰 수가 찾아서 왼쪽으로 옮기기, 시행할 때마다 cnt -1 소모
    # 2. 일단 다 바꿔보기
    while cnt>=0:
        for i in range(len(num)):
            for j in range(i+1, len(num)):
                num[i], num[j] = num[j], num[i]
                cnt -= 1
    print('#{} {}'.format(tc, "".join(num)))
