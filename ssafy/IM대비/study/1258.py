import sys
sys.stdin = open("input_1258.txt","r")

def search(x,y):
    if x<=-1 or x >= n or y <= -1 or y >= n:
        return False
    if arr[x][y] != 0:
        arr[x][y] = 0
        search(x-1,y)
        search(x,y-1)
        search(x+1,y)
        search(x, y+1)
        return True
    return False

t = int(input())
for tc in range(1,t+1):
    n = int(input())
    arr = [list(map(int,input().split())) for _ in range(n)]
    result = 0


    for i in range(n):
        for j in range(n):
            if search(i,j) == True:
                result += 1



    print(lst)


