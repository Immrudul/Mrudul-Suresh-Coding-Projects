c=int(input())
list1=[]

#Taking space separated input
list1=list(map(int,input().split()))
list2=list(map(int,input().split()))
counter=0

# Get rid of dealing with any indexes out of range
list1.insert(0,0)
list1.append(0)
list1.insert(0,0)
list1.append(0)

list2.insert(0,0)
list2.append(0)
list2.insert(0,0)
list2.append(0)

# Checking conditions for top row
for i in range(1, len(list1)-1):
    if list1[i]==1:
        if i%2==1:
            counter=counter+1
            if list1[i-1]==0:
                counter=counter+1
            if list1[i+1]==0:
                counter=counter+1
        elif i%2==0:
            if list1[i-1]==0:
                counter=counter+1
            if list1[i+1]==0:
                counter=counter+1
            if list2[i]==0:
                counter=counter+1
                
# Checking conditions for bottom row
for i in range(1,len(list2)-1):
    if list2[i]==1:
        if i%2==0:
            if list2[i-1]==0:
                counter=counter+1
            if list2[i+1]==0:
                counter=counter+1
            if list1[i]==0:
                counter=counter+1

        if i%2==1:
            counter=counter+1
            if list2[i-1]==0:
                counter=counter+1
            if list2[i+1]==0:
                counter=counter+1

print(counter)
