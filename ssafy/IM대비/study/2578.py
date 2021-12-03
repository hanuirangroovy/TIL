import sys
sys.stdin = open("input_2578.txt","r")

# def check(lst):
#     global check_cnt
#     # 가로가 다 0 일 때
#     for i in range(5):
#         if sum(lst[i][0:5]) == 0:
#             check_cnt += 1
#
#
#     # 세로가 다 0 일 떄
#     for j in range(5):
#         col_cnt = 0
#         for i in range(5):
#             if lst[i][j] == 0:
#                 col_cnt += 1
#             if col_cnt == 5:
#                 check_cnt += 1
#
#     # 우아래 대각선이 0 일 때
#     cross_cnt = 0
#     for i in range(5):
#         if lst[i][i] == 0:
#             cross_cnt += 1
#     if cross_cnt == 5:
#         check_cnt += 1
#
#     # 좌아래 대각선이 0일 때
#     xcross_cnt = 0
#     for i in range(4,-1,-1):
#         for j in range(5):
#             if lst[i][j] == 0:
#                 xcross_cnt += 1
#     if xcross_cnt == 5:
#         check_cnt += 1
#
#     return check_cnt
#
# board = [list(map(int,input().split())) for _ in range(5)]
# arr = [list(map(int,input().split())) for _ in range(5)]
#
# bingo = []
# cnt = 0
# check_cnt = 0
# # bingo : arr lst 안에 하나로 집어넣기
# for i in range(5):
#     for j in range(5):
#         bingo.append(arr[i][j])
#
# for i in range(25):   #bingo
#     for j in range(5):
#         for k in range(5):
#             if bingo[i] == board[j][k]:
#                 board[j][k] = 0
#                 cnt += 1
#                 if check(board) >= 3:
#                     print(cnt)
#                     exit()



def play_bingo(n):
    for x in range(5):
        for y in range(5):
            if n == board[x][y]:
                board[x][y] = 0
            if check(board) >= 3:
                return (bingo.index(n))+1

def check(lst):
    check_cnt = 0
    # 가로가 다 0 일 때
    for x in range(5):
        if sum(lst[x][0:5]) == 0:
            check_cnt += 1

    # 세로가 다 0 일 떄
    for c in range(5):
        col_cnt = 0
        for r in range(5):
            if lst[r][c] == 0:
                col_cnt += 1
        if col_cnt == 5:
            check_cnt += 1

    # 우아래 대각선이 0 일 때
    cross_cnt = 0
    for m in range(5):
        if lst[m][m] == 0:
            cross_cnt += 1
    if cross_cnt == 5:
        check_cnt += 1

    # 좌아래 대각선이 0일 때
    xcross_cnt = 0
    for x in range(5):
        if lst[x][4-x] == 0:
            xcross_cnt += 1
    if xcross_cnt == 5:
        check_cnt += 1

    return check_cnt

board = [list(map(int,input().split())) for _ in range(5)]
arr = [list(map(int,input().split())) for _ in range(5)]

bingo = []
result = 0
# arr lst 안에 하나로 집어넣기
for i in range(5):
    for j in range(5):
        bingo.append(arr[i][j])

for i in bingo:  # bingo
    result = play_bingo(i)
    if result:
        print(result)
        break

