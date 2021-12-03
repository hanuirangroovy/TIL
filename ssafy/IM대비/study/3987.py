#위,오른쪽, 아래, 왼쪽
dx = [-1,0,1,0]
dy = [0,1,0,-1]
sig= ['U','R','D','L']

def signal(x,y):
    global direction
    lst = []
    for i in range(4):
        cnt = 1
        dir = i
        newx = x + dx[dir]
        newy = y + dy[dir]
        while 0 <= newx <n and 0<= newy < m and arr[newx][newy] != 'C':

            if arr[newx][newy] == '/':
                if dir == 0:
                    dir = 1
                elif dir == 1:
                    dir = 0
                elif dir == 2:
                    dir = 3
                elif dir == 3:
                    dir = 2
            if arr[newx][newy] == '\\':
                if dir == 0:
                    dir = 3
                elif dir == 1:
                    dir = 2
                elif dir == 2:
                    dir = 1
                elif dir == 3:
                    dir = 0
            cnt += 1
            newx += dx[dir]
            newy += dy[dir]
            if newx == x and newy == y and i==dir:
                direction = sig[i]
                return -1
        lst.append(cnt)

    max_lst = max(lst)
    if lst[0] == max_lst:
        direction = 'U'
    if lst[1] == max_lst:
        direction = 'R'
    if lst[2] == max_lst:
        direction = 'D'
    if lst[3] == max_lst:
        direction = 'L'
    return max_lst

n, m = map(int,input().split())
arr = [list(input()) for _ in range(n)]
pr, pc = map(int,input().split())
x = pr - 1
y = pc - 1
direction = ''

result = signal(x,y)
print(direction)
if result == -1:
    print('Voyager')
else:
    print(result)
