import sys
sys.stdin = open(f'input_3143.txt', "r")

T = int(input())
for tc in range(1, T+1):
    a, b = input().split()
    A = len(a)
    B = len(b)
    cnt = 0
    
   
    
    for i in range(A-B+1):
        if a[i:i+B] == b:
            cnt += 1
                       
    result = A + cnt - (cnt*B)
    print('#{} {}'.format(tc, result))