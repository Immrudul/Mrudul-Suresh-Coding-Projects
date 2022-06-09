import math as m
n=int(input())



firstH=[]
lastH=[]

nums =(input().split(' '))
for i in range(0,len(nums)):
    nums[i]=int(nums[i])

nums.sort()

half = m.ceil(len(nums)/2)

a=m.floor(len(nums)/2)
#5
#1 5 6 7 60 90 100

for i in range(half):
    firstH.append(nums[i])
for i in range(half,n):
    lastH.append(nums[i])


firstH.reverse()

ans=[]



for i in range(0,a):
    ans.append(firstH[i])
    ans.append(lastH[i])

if n%2!=0:
    ans.append(firstH[half-1])

for x in range(0,len(ans)):
    print(ans[x], end=" ") 



