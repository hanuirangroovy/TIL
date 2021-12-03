import sys
sys.stdin = open("input_12927.txt","r")


light = list(input())

result = []
for i in range(len(light)):
    result.append('N')
if light == result:
    print(0)
    exit()
cnt = []
for i in range(0,len(light)):
    if light[i] != 'N':
        for j in range(i,len(light),i+1):
            cnt.append(i)
            if light[j] == 'N':
                light[j] = 'Y'
            else:
                light[j] = 'N'
    if light == result:
        print(len(set(cnt)))
        exit()
print(-1)

