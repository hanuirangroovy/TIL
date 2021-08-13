#문자열 뒤집기
s = list(input())
n = len(s)  #글자수
print(s)
for i in range(n//2):
    s[i], s[n-1-i] = s[n-1-i], s[i]  # s[i] <-> s[n-1-i]
print(s)
