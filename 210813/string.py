s = 'aba'
print(ord('A'))

cnt = [0]*26
for x in s:
    cnt[ord(x)-ord('a')] += 1
print(cnt)

print(chr(65))

s1 = 'aB1a'
for x in s1:
    if 'a' <= x <= 'z':
        cnt[ord(x)-ord('a')] += 1
    elif 'A' <= x <= 'Z':
        print(x)
    elif '0' <= x <= '9':
        print('숫자')
print(cnt)
print(chr(65))