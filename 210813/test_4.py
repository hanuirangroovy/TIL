def pattern_B(P):
    lenT = len(T)
    lenP = len(P)

    for idxT in range(lenT - lenP): #범위
        #for j in range(lenP):   break 필요
        idxP = 0
        while idxP < lenP and P[idxP] == T[   ]: #종료조건 넣어줘야
            idxP += 1
        if idxP == lenP: # 찾았어!!
            return idxT
        else:
            idxT += 1
    return -1


def pattern_BMOOR(P):
    lenT = len(T)
    lenP = len(P)

    jumpA = [lenP] * 128
    value = 0
    for i in range(lenP-1, -1, -1):
        c = P[i]
        jumpA[ord(P[i])] = value
        value += 1

    while idxT <
        idxP = 마지막위치
        #lsatT = 마지막 텍스트 위치
        #역으로 비교
        while idxP < lenP and P[idxP] == T[   ]: #종료조건 필요
            idxP += 1
        if idxP == lenP:
            return
        else:
            jump
    return -1