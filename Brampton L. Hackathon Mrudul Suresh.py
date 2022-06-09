#Word Wall by Mrudul Suresh


words={}
templist=[]
print("How many words would you like to add?")
n=int(input())
for i in range(n):
    word, meaning= input().split()
    if word in templist:
        print("This word cannot be added becuase it is already in the word wall")
        continue
    templist.append(word)
    templist.append(meaning)
    words[word]=meaning
for k in words:
    print(k,":",words[k])

print('Would you like to search for any word(s)?')
tempans=input()
if tempans=='yes':
    print("How many words would you like to search for the meaning of?")
    m=int(input())
    for i in range(m):
        query=input()
        for j in words:
            if j==query:
                print(j,":", words[query])
        if query not in words:
                print("The word",query, "is not in the word wall. Would you like to add it? Please type 'yes' or 'no'")
                answer=input()
                print("please type what the meaning of thew word", query, "is.")
                if answer=="yes":
                    words[query]=input()
                    templist.append(query)
                if answer=="no":
                    continue


print("Would you like to modify any existing words/meanings? Please type 'yes' or 'no'")
modification=input()
if modification=="yes":
    print("Would you like to change a word or meaning?")
    tochange=input()
    if tochange=="word":
        print("What is the word?")
        wordchange=input()
        print("Please type the new spelling of the word.")
        words[input()]=words.pop(wordchange)
    if tochange=="meaning":
        print("Which meaning of which word would you like to change?")
        tochange=input()
        print("Please type the new meaning.")
        words[tochange]=input()
for k in words:
    print(k,":",words[k])

Loading complete
