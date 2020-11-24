function checkAir(samples, threshold) {
  var totalDirty = samples.reduce((acc, current) => {
    if (current === "dirty") return (acc += 1);
    else return acc;
  }, 0);

  var dirtyPercentage = totalDirty / samples.length;

  if (dirtyPercentage > threshold) return "Polluted";
  else return "Clean";
}

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
