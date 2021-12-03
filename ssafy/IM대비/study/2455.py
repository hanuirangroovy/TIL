import sys
sys.stdin = open("input_2455.txt","r")


lst = [list(map(int, input().split())) for _ in range(4)]
result = []
people = 0
for i in range(4):
    people += (lst[i][1] - lst[i][0])
    result.append(people)

print(max(result))