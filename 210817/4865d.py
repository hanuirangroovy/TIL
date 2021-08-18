TC = int(input())
for tc in range(1, TC+1):
    str1, str2 = input().split()

    N = len(str1)
    M = len(str2)
    cnt = 0
    idxT = 0
    while idxT < N-M+1:
        idxP = 0
        while idxP < M and str1[idxT+idxP] == str2[idxP]:
            idxP += 1
        if idxP == M:
            cnt += 1
            idxT += idxP
        else:
            idxT += 1

    print('#{} {}'.format(tc,maxV))
            