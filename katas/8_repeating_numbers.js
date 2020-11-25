function repeatNumbers(data) {
  var repeatedNumbers = "";

  for (var i = 0; i < data.length; i++) {
    var totalRepetitions = data[i][1];
    for (var j = 0; j < totalRepetitions; j++) {
      var numToBeRepeated = data[i][0];
      repeatedNumbers += numToBeRepeated;
    }
    var isLastSubarray = i === data.length - 1;
    if (data.length > 0 && !isLastSubarray) repeatedNumbers += ", ";
  }

  return repeatedNumbers;
}

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
