const moves = ["north", "north", "west", "west", "north", "east", "north"];

console.log(finalPosition(moves));

function finalPosition(moves) {
  var dx = 0;
  var dy = 0;

  for (var move of moves) {
    if (move === "north") dy += 1;
    else if (move === "south") dy -= 1;
    else if (move === "east") dx += 1;
    else if (move === "west") dx -= 1;
  }

  return [dx, dy];
}
