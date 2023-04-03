def howMuchPaint(wallSize):
    squared_meters_per_liter = 3
    liters_per_can = 18
    can_price = 80
    squared_meters_per_can = squared_meters_per_liter * liters_per_can
    cans_necessary = wallSize // squared_meters_per_can
    if wallSize % squared_meters_per_can > 0:
        cans_necessary += 1
    return (cans_necessary, cans_necessary * can_price)
