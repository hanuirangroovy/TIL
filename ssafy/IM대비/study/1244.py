import sys
sys.stdin = open("input_1244.txt","r")

def change(n):
    if lst[n] == 0:
        lst[n] = 1
    else:
        lst[n] = 0
    return


n = int(input())
lst = list(map(int,input().split()))
student = int(input())
for _ in range(student):
    s, s_n = map(int,input().split())

#남학생은 받은 수의 배수를 바꿈
    if s == 1:
        for i in range(s_n-1,n,s_n):
            change(i)

# 여학생은 자기가 받은수를 중심으로 좌우가 대칭이면서 가장 많은 스위치를 포함하는 구간을 찾아 바꿈
    else:
        change(s_n-1)
        for i in range(1,s_n):
            if s_n-1+i>=n or s_n-1-i<0: break
            if lst[((s_n-1)-i)] == lst[((s_n-1)+i)]:
                change(s_n-1+i)
                change(s_n-1-i)
            else:
                break

for j in range(0,n,20):
    print(*lst[j:j+20])