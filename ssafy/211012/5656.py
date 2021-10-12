import sys
sys.stdin = open("input_5656.txt","r")
import copy
# 벽돌치기

def drop(pos, block):
    st = []
    # 세로 위치를 찾는다
    row = 0
    while row < h and block[row][pos]==0:
        row += 1
    if row == h:
        return 0
    st.append((row,pos))
    sumV = 0
    # 블록 제거
    while st:
        row, col = st.pop()
        size = block[row][col]
        #size기준으로 삭제해야하는 것들을 스택에 넣는다.
        if size==0: continue
        for i in range(1,size):
            #상:
            if col-i >=0 and block[row][col-i]:
                st.append((row, col-i))
            #하
            if col + i <w and block[row][col+i]:
                st.append((row, col+i))
            #좌
            if row - i >= 0 and block[row-i][col]:
                st.append((row - i, col))
            #우
            if row + i < h and block[row+i][col]:
               st.append((row+i, col))
        block[row][col] = 0
        sumV += 1
    return sumV

def clean(block):
    for col in range(w):
        desP = srcP = h-1
        while srcP>=0:
            if block[srcP][col] > 0:
                block[desP][col] = block[srcP][col]
                desP -= 1
            srcP -= 1
        while desP >= 0:
            block[desP][col] = 0
            desP -= 1


def solve(k, block, curC):
    global minC
    if k == n:
        if blockC -curC < minC:
            minC = blockC -curC
        return
    for i in range(w):
        tmpblocks = copy.deepcopy(block)
        cnt = drop(i, block)
        clean(block)
        res[k] = i
        solve(k+1, block, curC+cnt)
        block = copy.deepcopy(tmpblocks)


t = int(input())
for tc in range(1, t+1):
    n, w, h = map(int, input().split())
    block = [list(map(int, input().split())) for _ in range(h)]
    res = [-1] * n
    minC = w * h
    blockC = 0
    for i in range(h):
        blockC += w - block[i].count(0)
    solve(0, block, 0)
    print("#{} {}".format(tc, minC))