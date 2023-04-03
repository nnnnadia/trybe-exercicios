prices = {
    "A": 1.9,
    "G": 2.5,
}


def closeTab(liters, typeOil):
    if typeOil == "A":
        if liters > 20:
            return liters * prices[typeOil] * 0.95
        else:
            return liters * prices[typeOil] * 0.97
    elif typeOil == "G":
        if liters > 20:
            return liters * prices[typeOil] * 0.94
        else:
            return liters * prices[typeOil] * 0.96
