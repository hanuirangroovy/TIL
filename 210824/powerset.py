a = [20, 31, 78]
t = [0] * 3

def powerset1(k):
    if k == 3 :
        #print(t)
        for i in range(3):   # 부분집합 출력
            if t[i] :
                print(a[i], end = " ")
        print()
    else:
        t[k] = True
        powerset(k+1)
        t[k] = False
        powerset(k+1)


def powerset(k):
    if k == 3 :
        #print(t)
        for i in range(3):
            if t[i]==1 :
                print(a[i], end = " ")
        print()
    else:
        for i in range(2):
            t[k] = i
            powerset(k+1)

#powerset(0)

def per(k):    #순열
    if k == 3:
        print(t)
        for i in range(3):
            # pos = t[i]
            # print(a[pos], end = " ")
            print(a[t[i]], end = " ")
        print()
    else:
        for i in range(3):
            if not visited[i]: #visited[i] == False: 용 안한 경우에
                t[k] = i
                visited[i] = True #내려갈때
                per(k+1)
                visited[i] = False #다음에 영향주지 않도록

visited = [False] * 3
a = [20, 31, 78]
t = [-1] * 3
# 0, 1, 2 => 20, 31, 78
# 0, 2, 1 => 20, 78 ,31
# 1, 0, 2 => 31, 20, 78
# 1, 2, 0 => 31, 78, 20
# 2, 0, 1 => 78, 31, 20
# 2, 1, 0 => 78, 20, 31