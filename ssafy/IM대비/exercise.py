# 가나다라마바

# lst = list(input())
# print(lst)

#1234567
# lst = list(map(int,input()))
# print(lst)


# def minus(n):
#     return int(n) - 1
#
# arr = list(map(minus,input().split()))
# print(arr)


#이차원입력
#3*3 크기의 2차 리스트가 주어진다.
# 1 2 3
# 4 5 6
# 7 8 9
# arr = [list(map(int,input().split())) for _ in range(3)]
# print(arr)



#출력
#arr = [1, 2, 3]
# for i in arr:
#     print(i,end=" ")
# print(*arr)



# 조건표현식
# money = 100000000
# happy = True if money >= 100000000 else "False"
# print(happy)

#논리연산자
def T():
    print("트루")
    return True

def F():
    print("펄쓰")
    return False

# if T() and T():
#     print("실행")
# if T() and F():
#     print("실행")
# if F() and T():
#     print("실행")
# if F() and F():
#     print("실행")
# if T() or T():
#     print("실행")
# if T() or T():
#     print("실행")
# if F() or T():
#     print("실행")
# if F() or F():
#     print("실행")




text = "This iss a book~!"
pt = "iss"

# if pt in text:
# print("oo 들어있음")

# 이중 for문(my)
# for i in range(len(text)-len(pt)+1):
#     for j in range(len(pt)):
#         if text[i:i+j+1] == pt:
#             print('{} 들어있음'.format(pt))

#for문(my)
# for i in range(len(text)-len(pt)+1):
#     if text[i:i+len(pt)] == pt:
#             print('{} 들어있음'.format(pt))

#while문으로(my)
# i = 0
# while True:
#     if text[i:i+len(pt)] == pt:
#         print('{} 들어있음'.format(pt))
#         break
#     i += 1


n = len(text)
m = len(pt)
#for문(pro)
for i in range(n-m+1):
    #패턴 돌면서 확인
    flag = True
    for j in range(m):
        if pt[j] != text[i+j]:
            flag = False
            break
    # else:
    if flag:
        print(i,"에서 시작하면 패턴이 있음")

