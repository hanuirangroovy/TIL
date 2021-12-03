import sys
sys.stdin = open("input_2138.txt","r")

# n = int(input())
# origin = list(input())
# result = list(input())
#
# origin_int = []
# result_int = []
#
# for i in origin:
#     origin_int.append(int(i))
# for i in result:
#     result_int.append(int(i))
#
# cnt = 0
# for i in range(n):
#     if i-1 >= 0:
#         if origin_int[i-1] == 0:
#             origin_int[i-1] = 1
#         elif origin_int[i-1] == 1:
#             origin_int[i-1] = 0
#         cnt += 1
#     if origin_int[i] == 0:
#         origin_int[i] = 1
#     elif origin_int[i] == 1:
#         origin_int[i] = 0
#     if i+1 < n:
#         if origin_int[i+1] == 0:
#             origin_int[i+1] = 1
#         elif origin_int[i+1] == 1:
#             origin_int[i+1] = 0
#             cnt += 1
#     if origin == result:
#         print(cnt)
#         exit()
# if origin != result:
#     print(-1)

#왜 안될까..
def change(n):
    global a
    if n == 0:
        n = 1
    else:
        n = 0
    return n

a = [1,1,0]
change(a[1])
print(a)


