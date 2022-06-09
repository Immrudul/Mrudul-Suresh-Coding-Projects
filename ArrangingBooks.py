order=input()
oa=list(order)
o=sorted(oa)
tempo=oa
tempos=o
#[LLSLM]
#[LLLMS]
temp=[]
atemp=[]
count=0
rtemp=[]
if oa==o:
    count=0
else:
    for i in range(0,len(oa)):
        if oa[i]==o[i]:
            continue
        else:
            temp.append(oa[i])
            atemp.append(o[i])

#['S', 'L', 'M'] temp[i] temp[j]
#['L', 'M', 'S']



def minSwaps(arr):
    n = len(arr)
    arrpos = [*enumerate(arr)]
    arrpos.sort(key = lambda it : it[1])
    vis = {k : False for k in range(n)}
    ans = 0
    for i in range(n):
        if vis[i] or arrpos[i][0] == i:
            continue
        cycle_size = 0
        j = i
         
        while not vis[j]:
            vis[j] = True
            j = arrpos[j][0]
            cycle_size += 1
        if cycle_size > 0:
            ans += (cycle_size - 1)
    return ans   
arr=(temp)
print(minSwaps(arr))
