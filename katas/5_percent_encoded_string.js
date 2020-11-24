function urlEncode(text) {
  var newText = text.replace(/^\s/, "");
  // replace all empty space but first
  return newText.replace(/(?!^\s)[\s]/gi, "%20");
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
