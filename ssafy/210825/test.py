from collections import deque

# enqueue -> append
q = deque()
q.append(1)
q.append(2)
q.append(3)
# dequeue -> popleft
while q:
    print(q.popleft())