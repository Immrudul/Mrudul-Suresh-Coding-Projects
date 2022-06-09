def f(x):
    return (10*(x**3))+(14*(x**2))+(20*x)+1

num=int(input())

hi=int(input())
low=int(input())




for i in range(low, hi+1):
    x=i
    if f(x)==num:
        print(x)
        break
