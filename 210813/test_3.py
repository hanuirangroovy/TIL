T = 'TTTTAACCABCDETTATTTF'
#P =               'TTATTT'

def patter_B():
    lenT = len(T)
    lenP = len(P)

    for idxT in range(lenT - ):
        idxP = 0
        while idxP < lenP and P[idxP] == T[]:
            idxP += 1
        if idxP == lenP:
            return idxT
        else:
            idxT += 1
    return -1
result = Pattern_B('TTATTT')
print(result)
#print(pattern_B('TTATTT'))
        #for j in range(lenP):