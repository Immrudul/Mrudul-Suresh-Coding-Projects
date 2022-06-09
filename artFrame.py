n=int(input())

lowestX=100
highestX=0
lowestY=100
highestY=0
for i in range(0,n):
    temp=[]
    x, y = map(int, input().split(', '))
    temp.append(x)
    temp.append(y)
    if temp[0]>highestX:
        highestX=temp[0]
    if temp[0]<lowestX:
        lowestX=temp[0]
    if temp[1]>highestY:
        highestY=temp[1]
    if temp[1]<lowestY:
        lowestY=temp[1]
print(lowestX-1, lowestY-1)
print(highestX+1, highestY+1)
