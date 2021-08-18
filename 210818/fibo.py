def fibo(n):
    global cnt
    cnt += 1
    if n < 2 :
        return n
    else :
        return fibo(n-1) + fibo(n_2)
cnt = 0
print(fibo(4), cnt)