n=int(input())
#5
a=list(map(int,input().split())) 
#2 7 3 4 9
b=[]

sum=0
for i in range(0,len(a)):
    b.append(1+sum)
    sum+= a[i]

#1, 3, 10, 13, 17
num_of_worms=int(input())
worms=list(map(int,input().split()))
#1 25 11

for i in worms:
    low=0
    high=n-2
    if i>=b[n-1]:
        print(n)
    else:
        while high>=low:
            mid=(low+high)//2
            if i>=b[mid] and i<b[mid+1]:
                print(mid+1)
                break
            elif i>b[mid]:
                low=mid+1
            else:
                high=mid-1

    

