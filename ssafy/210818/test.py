def fact(n):

    if n==1:
        return 1
    #5! 5*4!
    result = n*fact(n-1)
    return result

print(fact(5))