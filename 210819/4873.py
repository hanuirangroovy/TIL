import sys
sys.stdin = open(f'input_4873.txt', "r")


t = int(input())
for tc in range(1, t+1):
    word = input()
    result = []
    for w in word:
        if result:
            if w == result[-1]:
                result.pop()
            else:
                result.append(w)
        else:
            result.append(w)


    print('#{} {}'.format(tc, len(result)))