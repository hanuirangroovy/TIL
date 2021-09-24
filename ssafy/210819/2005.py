import sys
sys.stdin = open(f'input_2005.txt', "r")

t = int(input())
for tc in range(1,t+1):
    N = int(input())
    result = [[1]]
    for i in range(1, N):
        lst = []
        for j in range(i+1):
            if j == 0 or j == i:
                lst.append(1)
            else:
                lst.append(result[i-1][j-1] + result[i-1][j])
        result.append(lst)
    
    print('#{}'.format(tc))
    for k in range(N):
        print(*result[k])
