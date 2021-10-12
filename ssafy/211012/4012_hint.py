import sys
sys.stdin = open("input_4012.txt","r")

def combi(n, m, k, s):
    if k == m:
        print(res)
        b = list(set(t)-set(res))

    for i in range(s, n-m+k+1):
        res[k] = i
        cp,bo(n, m, k+1, i+1)

res = [-1] * m
t = [0,1,2,3]
combi(n,m,0,0)
