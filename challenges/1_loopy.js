/*
If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
*/

var counter = 100;

while (counter <= 200) {
  if (counter % 3 === 0 && counter % 4 === 0) console.log("LoopyLighthouse");
  else if (counter % 3 === 0) console.log("Loopy");
  else if (counter % 4 === 0) console.log("Lighthouse");
  else console.log(counter);

  counter += 1;
}
