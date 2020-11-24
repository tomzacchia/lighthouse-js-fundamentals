function howManyHundreds(num) {
  if (num < 100) return 0;
  var numOfHundredsCount = 0;

  while (num >= 100) {
    numOfHundredsCount += 1;
    num -= 100;
  }

  return numOfHundredsCount;
}
