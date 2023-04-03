def whichIsLonger(arrOfStrings):
    sortedByLen = sorted(arrOfStrings, reverse=True, key=len)
    return sortedByLen[0]
