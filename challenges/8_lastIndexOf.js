function lastIndexOf(nums, target) {
  var lastIndex = -1;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target) lastIndex = i;
  }

  return lastIndex;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
