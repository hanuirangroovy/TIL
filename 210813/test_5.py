def myReverse():
    pass

def itoa(value):
    t = []
    if value < 0:
        isMinus = True
        value = value * -1
    else:
        isMinus = False

    while value > 0:
        tt = value%10
        t.append(chr(tt + 0x30))
        value = value // 10
    t.reverse()
    if isMinus:
        return '-' + ''.join(t)
    else:
        return ".join(t)"
    #print(t)
    #return__''.join(t)
    #print(t)

print(itoa(123), type(itoa(123)))
print(itoa(-123), type(itoa(-123)))