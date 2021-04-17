entrada = input()

coordenates = entrada.split(" ")

coordenateX  = float(coordenates[0]);
coordenateY = float(coordenates[1]);

if coordenateX > 0.0 and coordenateY > 0.0:
    print("Q1")
elif coordenateX > 0.0 and coordenateY < 0.0:
    print("Q4")
elif coordenateX < 0.0 and coordenateY < 0.0:
    print("Q3")
elif coordenateX < 0.0 and coordenateY > 0.0:
    print("Q2")
elif (coordenateX == 0.0 and coordenateY > 0.0) or (coordenateX == 0.0 and coordenateY < 0.0):
    print("Eixo Y")
elif (coordenateX > 0.0 and coordenateY == 0.0) or (coordenateX < 0.0 and coordenateY == 0.0):
    print("Eixo X")
else:
    print("Origem")
