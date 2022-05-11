import sys
sys.stdin = open("3.txt","r", encoding='UTF8')

n = int(input())
list_grade = []
for i in range(n):
    name_grade = input().split()
    list_grade.append([name_grade[0],int(name_grade[1])])

def sorting(data):
    return data[1]

list_grade = sorted(list_grade, key=sorting)

for i in range(n):
    print(list_grade[i][0], end=' ')
