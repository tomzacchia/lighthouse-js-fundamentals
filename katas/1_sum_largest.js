function sumLargestNumbers(arr) {
  if (arr.length === 2) return arr[0] + arr[1];

  var biggestNum = arr[0];
  var secondBiggestNum = arr[1];

  for (var i = 2; i < arr.length; i++) {
    if (arr[i] > biggestNum) biggestNum = arr[i];
    else if (arr[i] > secondBiggestNum) secondBiggestNum = arr[i];
  }

  return biggestNum + secondBiggestNum;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
