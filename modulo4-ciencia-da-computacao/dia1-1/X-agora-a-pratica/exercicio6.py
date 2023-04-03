def whichTriangle(x, y, z):
    if x + y > z and x + z > y and y + z > x:
        if x == y and x == z:
            return "É um triângulo equilátero"
        elif x == y or x == z or y == z:
            return "É um triângulo isósceles"
        else:
            return "É um triângulo escaleno"
    else:
        return "Não é um triângulo"
