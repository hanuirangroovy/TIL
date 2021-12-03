import sys
sys.stdin = open("input_1289.txt","r")

t = int(input())
for tc in range(1,t+1):
    result_bit = list(map(int, input()))
    bit = [0]*len(result_bit)
    cnt = 0
    for i in range(len(result_bit)):
        if result_bit[i] != bit[i]:
            cnt += 1
            for j in range(i, len(result_bit)):
                if result_bit[i] == 0 :
                    bit[j] = 0
                else:
                    bit[j] = 1
    print('#{} {}'.format(tc,cnt))

