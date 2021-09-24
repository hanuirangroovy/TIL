def fibo(n):
    if n<= 2:
        return n
    t1 = fibo(n-1)
    t2 = fibo(n-2)
    return t1 + t2
    #return fibo(n-1) + fibo(n-2)

def fibo_m():
    if n<2:
        memo[n] = n
        return memo[n]

    #if memo[n] > 0:
    #    return memo[n]
    #else:
    #    memo[n] = fibo_m(n-1) + fibo(n-2)
    #    return memo[n]

    if n>=2 and memo[n] == 0:
        memo[n] = fibo_m(n-1) + fibo_m(n-2)
    return memo[n]

memo = [0]*(n+1)
memo[0] = 0
memo[1] = 1
fibo(10)


#for i in range(5):
#    print(fibo(i), end=' ') 