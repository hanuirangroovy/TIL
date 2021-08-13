s1 = 'aba'
s2 = s1.replace('a','d')
s3 = s1.split()
s4 = 'a b a'
s5 = s4.split()
s6 = s4.replace('a', 'd')
s7,s8,s9 = s4.split()
print(s2)   #dbd
print(s1)   #aba
print(s3)   #['aba']
print(s5)   #['a', 'b', 'c']
print(s4)   #a b a
print(s6)   #d b d
print(s7,s8, s9)   # a b a
print(s4.isalpha())   #False
print(s1.isalpha())   #True
