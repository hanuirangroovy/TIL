import sys
sys.stdin = open("2.txt","r")

loc = input()
row = int(loc[1])
col = int(ord(loc[0])) - int(ord('a')) + 1

moves = [[-1,-2], [-1,2], [-2,-1], [-2,1], [1,-2], [1,2], [2,-1], [2,1]]

result = 0
for move in moves:
    result_x = row + move[0]
    result_y = col + move[1]
    if (0 < result_x <= 8) and (0 < result_y <= 8):
        result += 1
print(result)
