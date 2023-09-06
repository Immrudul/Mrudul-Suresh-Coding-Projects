r = int(input())
c = int(input())
n = int(input())
board = []
row = []
inputList = []
counter = 0

for i in range(n):
    inputList.append(input().split(" "))

for n in range(c):
    row.append('B')
for i in range(r):
    board.append(list(row))

for i in range(n):
    if inputList[i][0] == 'R':
        for n in range(c):
            R = int(inputList[i][1]) - 1
            if board[R][n] == 'B': board[R][n] = 'G'
            elif board[R][n] == 'G': board[R][n] = 'B'
    if inputList[i][0] == 'C':
        for n in range(r):
            C = int(inputList[i][1]) - 1
            if board[n][C] == 'B': board[n][C] = 'G'
            elif board[n][C] == 'G': board[n][C] = 'B'

for a in range(r):
    for b in range(c):
        if board[a][b] == 'G':
            counter += 1

print(counter)
