entrada = input()

valores  = entrada.split(" ")

a = int(valores[0])
b = int(valores[1])
c = int(valores[2])

if (a > b and a > c) and (b > c):
    print(str(c) + "\n" + str(b) + "\n" + str(a) + "\n\n" + str(a) + "\n" + str(b) + "\n" + str(c))
elif (a > b and a > c) and (c > b):
    print(str(b) + "\n" + str(c) + "\n" + str(a) + "\n\n" + str(a) + "\n" + str(b) + "\n" + str(c))
elif (b > a and b > c) and (c > a):
    print(str(a) + "\n" + str(c) + "\n" + str(b) + "\n\n" + str(a) + "\n" + str(b) + "\n" + str(c))
elif (b > a and b > c) and (a > c):
    print(str(c) + "\n" + str(a) + "\n" + str(b) + "\n\n" + str(a) + "\n" + str(b) + "\n" + str(c))
elif (c > b and c > a) and (a > b):
    print(str(b) + "\n" + str(a) + "\n" + str(c) + "\n\n" + str(a) + "\n" + str(b) + "\n" + str(c))
else:
    print(str(a) + "\n" + str(b) + "\n" + str(c) + "\n\n" + str(a) + "\n" + str(b) + "\n" + str(c))
