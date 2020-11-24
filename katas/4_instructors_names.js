function instructorWithLongestName(instructors) {
  if (!instructors) return null;

  var temp = instructors[0];

  for (var i = 1; i < instructors.length; i++) {
    if (instructors[i].name.length > temp.name.length) {
      temp = instructors[i];
    }
  }

  return temp;
}

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
