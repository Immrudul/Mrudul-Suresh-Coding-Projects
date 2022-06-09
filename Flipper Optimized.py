original=[[1,2],[3,4]]
a=input()

for i in range(0, len(a)): 
    if a[i]=='H':
        original[0][0], original[1][0] = original[1][0], original[0][0]
        original[0][1], original[1][1] = original[1][1], original[0][1]

    if a[i]=='V':
        original[0][0], original[0][1] = original[0][1], original[0][0]
        original[1][0], original[1][1] = original[1][1], original[1][0]

print(original[0][0], original[0][1])
print(original[1][0], original[1][1])
