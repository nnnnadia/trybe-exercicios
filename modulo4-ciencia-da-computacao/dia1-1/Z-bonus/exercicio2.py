def printTriangle(x):
    if x < 1:
        return "Número inválido"
    triangle = ["*" * (s + 1) for s in range(x)]
    for line in triangle:
        print(line)
