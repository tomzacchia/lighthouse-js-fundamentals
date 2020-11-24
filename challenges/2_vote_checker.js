const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

chooseStations(stations);

function chooseStations(stations) {
  var validStations = [];

  for (var station of stations) {
    if (
      station[1] >= 20 &&
      (station[2] === "school" || station[2] === "community centre")
    ) {
      validStations.push(station[0]);
    }
  }

  return validStations;
}
