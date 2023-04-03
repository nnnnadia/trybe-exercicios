def printSquare(x):
    if x < 1:
        return "Número inválido"
    square = ["*" * x] * x
    for line in square:
        print(line)
