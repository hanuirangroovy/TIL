import sys
sys.stdin = open("input_1204.txt","r")

t = int(input())
for _ in range(t):
    tc = int(input())
    lst = list(map(int,input().split())) #학생 1000명 점수
    score = [0] * 101  # 점수변 빈도수
    for i in range(len(lst)):
        score[lst[i]] += 1
    max_score = max(score)
    result = []
    for i in range(len(score)):
        if score[i] == max_score:
            result.append(i)
    print('#{} {}'.format(tc, max(result)))