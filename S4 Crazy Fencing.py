n=int(input())
a=[]

for i in range(1):
    i=input().split()
    a.append(i)
#print(a)

h=[]
for i in range(1):
    i=input().split()
    h.append(i)
#print(b)

area=0
ca=0
for i in a:
    for j in i:
        ca=j
        continue
        cb=j
        for x in h:
            toadd=((ca+cb)/2*x)
            area=area+toadd
print(area)
