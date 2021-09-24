TC = int(input())
for tc in range(1, TC+1):
    str1 = input()
    str2 = input()

    myDict = {}
    for c in str1:
        if c not in myDict:
            myDict[c] = 0

    #print(myDict)
    for c in str2:
        if c in myDict:
            myDict[c] += 1


    maxV = 0
    for i in myDict.values():
        if i > maxV:
            maxV = i
    print('#{} {}'.format(tc, maxV))