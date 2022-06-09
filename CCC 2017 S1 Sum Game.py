n=int(input())

answer=0

list1=input().split(' ')
list2=input().split(' ')

list1Total=0
list2Total=0

for i in range(n):
    list1Total+= int(list1[i])
    list2Total+= int(list2[i])
    if list1Total==list2Total:
        answer=i+1

print(answer)

