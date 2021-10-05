import sys
sys.stdin = open("input_5203.txt","r")

def babyjin(player):
    for i in range(8):  #연속된 숫자 3개 이상
        if player[i] and player[i + 1] and player[i + 2]:
            return True

    for j in range(10):  #같은 숫자 3개 이상
        if player[j] == 3:
            return True

    return False


t = int(input())
for tc in range(1, t+1):
    lst = list(map(int, input().split()))
    player1 = [0] * 10  #숫자는 0~9
    player2 = [0] * 10
    win = 0
    for i in range(12):
        if i % 2 == 0:   #짝수
            player1[lst[i]] += 1
            if babyjin(player1):
                win = 1
                break

        else:
            player2[lst[i]] += 1
            if babyjin(player2):
                win = 2
                break

    print('#{} {}'.format(tc, win))