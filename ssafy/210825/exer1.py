Q = [0] * 10  #10칸짜리 큐
front = -1
rear = -1

rear += 1
Q[rear] = 1    #enQueue(1)

rear += 1
Q[rear] = 2    #enQueue(2)

rear += 1
Q[rear] = 3    #enQueue(3)

while front != rear:
    front += 1
    print(Q[front], end = ' ')    #print(deQueue())
print()

listQ = []
listQ.append(1)
listQ.append(2)
listQ.append(3)
while listQ:
    print(listQ.pop(0), end = ' ')
print

