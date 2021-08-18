def check(str1, str2):
    N = len(str1)
    M = len(str2)

    for i in range(M-N+1):
        j = 0
        for h in range(N):
            if str1[j] == str2[i+j]:
                j += 1
        if j == N:
            return 1
    else:
        return 0

t = int(input())
for tc in range(1,t+1):
    str1=str(input())
    str2=str(input())
    result = check(str1, str2)
    print('#{} {}'.format(tc, result))
