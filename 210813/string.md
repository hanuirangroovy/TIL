# string



## 고지식한 알고리즘

```
p = "is"
t = "This is a book~!"
m = len(p)
n = len(t)


def bruteforce(p, t):
    i = 0
    j = 0
    while j<m and i<n:
        if t[i] != p[j]:
            i = i-j
            j = -1
        i += 1
        j += 1
    if j == m:
        return i-m
    else:
        return -1

print(bruteforce(p, t))
```

