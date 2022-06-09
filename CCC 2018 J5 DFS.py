n=int(input())
visited=[]
options=[]
distance=[]
options_num=[]
#print(list(map(int,string.split(" "))))
for i in range(n):
    distance.append(0)
    visited.append(False)
    temp=input().split(" ")
    options.append(temp[1:])
    options_num.append(temp[0])

def dfs(i,dist):
    visited[i] = True
    distance[i] = dist
    for j in options[i]:
        if visited[int(j)-1] == False:
            dfs(int(j)-1,dist+1)

dfs(0,0)
counter=0
for i in range(len(visited)):
    if visited[i] == False:
        counter+=1
        
if counter>0:
    print("N")
else:
    print("Y")

ending_dist=[]

for i in range(n):
    if int(options_num[i]) == 0 and visited[i] == True:
        ending_dist.append(distance[i])
print(min(ending_dist)+1)



        
