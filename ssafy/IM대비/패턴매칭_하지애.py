
text = "This is book"
pt = "as"

#이중 for문
# for i in range(len(text)-len(pt)+1):
#     for j in range(len(pt)):
#         if text[i:i+j+1] == pt:
#             print('{} 들어있음'.format(pt))

#for문
# for i in range(len(text)-len(pt)+1):
#     if text[i:i+len(pt)] == pt:
#             print('{} 들어있음'.format(pt))

#while문으로
i = 0
while True:
    if text[i:i+len(pt)] == pt:
        print('{} 들어있음'.format(pt))
        break
    i += 1