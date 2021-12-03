def find_signal(row, col):
    global direction
    global result

    # 상우하좌
    dr = [-1, 0, 1, 0]
    dc = [0, 1, 0, -1]

    cnt_list = []

    for i in range(4): #4방향 모두 한번씩 가봐야 된다.
        cnt = 1 # 방향마다 카운트 리셋
        dir = i # 방향을 일단 적어줌

        nr = row + dr[dir]
        nc = col + dc[dir]

        while 0<=nr<N and 0<=nc<M and ARR[nr][nc] != 'C': # 인덱스범위 벗어나지않으면서 블랙홀이 아니면 계속 반복
            if 0<=nr<N and 0<=nc<M and ARR[nr][nc] == '\\':
                if dir == 0:
                    dir = 3
                elif dir == 1:
                    dir = 2
                elif dir == 2:
                    dir = 1
                elif dir == 3:
                    dir = 0
            elif 0<=nr<N and 0<=nc<M and ARR[nr][nc] == '/':
                if dir == 0:
                    dir = 1
                elif dir == 1:
                    dir = 0
                elif dir == 2:
                    dir = 3
                elif dir == 3:
                    dir = 2

            cnt += 1  # 한걸음마다 카운트 세준다.
            nr += dr[dir]
            nc += dc[dir]
            if row == nr and col == nc and i == dir: # 나를 다시 만났다는것은 무한루프라는 의미!
                if i == 0:
                    direction = 'U'
                elif i == 1:
                    direction = 'R'
                elif i == 2:
                    direction = 'D'
                elif i == 3:
                    direction = 'L'
                return -1

        cnt_list.append(cnt)

    max_cnt = max(cnt_list)

    if cnt_list[0] == max_cnt:
        direction = 'U'
    elif cnt_list[1] == max_cnt:
        direction = 'R'
    elif cnt_list[2] == max_cnt:
        direction = 'D'
    elif cnt_list[3] == max_cnt:
        direction = 'L'

    return max_cnt

N, M = map(int,input().split())
ARR = [list(input()) for _ in range(N)]
PR, PC = map(int,input().split())
direction = ''
result = 0

result = find_signal(PR-1, PC-1)

print(direction)
if result == -1:
    print('Voyager')
else:
    print(result)