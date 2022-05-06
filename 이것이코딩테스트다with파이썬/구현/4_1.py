import sys
sys.stdin = open("4_1.txt","r")

t = int(input())
dir = input().split()
x, y = 1, 1

for i in dir:
    if i == 'R' and y < t:
        y += 1
    elif i == 'L' and y>1:
        y -= 1
    elif i == 'U' and x>1:
        x -= 1
    elif i == 'D' and x < t:
        x += 1
    else:
        continue

print(x, y)