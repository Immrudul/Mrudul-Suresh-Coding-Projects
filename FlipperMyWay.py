list1=[1,2]
list2=[3,4]

list1temp=[]
list2temp=[]

a=input()

for i in range(0, len(a)): 
    if a[i]=='H':
        list1temp.append(list1[0])
        list1temp.append(list1[1])
        list1[0], list1[1] = list2[0], list2[1]
        list2[0], list2[1] = list1temp[0], list1temp[1]
        list1temp=[]

    if a[i]=='V':
        list2temp.append(list1[0])
        list2temp.append(list2[1])
        list1[0] = list1[1]
        list1[1] = list2temp[0]
        list2temp=[]
        list2temp.append(list2[0])
        list2temp.append(list2[1])
        list2[0] = list2[1]
        list2[1] = list2temp[0]

print(' '.join(map(str, list1))) 
