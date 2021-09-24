def push():
    s.append(item)

def pop():
    if len(s)==0:
        return -1
    return s.pop(-1)

s = []
push(1)
push(2)
push(3)
push(4)
push(5)
#s.append(1) 한줄짜리 함수 만들어야해?
print(pop())
print(pop())
print(pop()) #데이터가 없는데 찾아오라고 할 때 오류
#print(s.pop(-1))
print(s)