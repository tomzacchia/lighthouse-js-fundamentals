function range(start, end, step) {
  if (start > end || step === 0) return [];
  else if (start === undefined || end === undefined || step === undefined)
    return [];

  var range = [];

  for (var i = start; i <= end; i += step) {
    if (i <= end) range.push(i);
  }

  return range;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
