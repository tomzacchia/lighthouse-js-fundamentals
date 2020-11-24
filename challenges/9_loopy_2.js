function loopyLighthouse(range, multiples, words) {
  var [start, end] = range;

  while (start <= end) {
    if (start % multiples[0] === 0 && start % multiples[1] === 0) {
      console.log(words.join(""));
    } else if (start % multiples[0] === 0) {
      console.log(words[0]);
    } else if (start % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(start);
    }

    start += 1;
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
