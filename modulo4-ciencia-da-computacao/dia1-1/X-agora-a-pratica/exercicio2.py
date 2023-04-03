def calcAverage(arrOfNumbers):
    numberOfElements = len(arrOfNumbers)
    counter = 0
    for x in arrOfNumbers:
        counter += x
    return counter / numberOfElements
