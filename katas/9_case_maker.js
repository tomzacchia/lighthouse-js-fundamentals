function camelCase(text) {
  var camelCaseText = text.replace(/(?<=\s)[a-z]/g, (char) =>
    char.toUpperCase()
  );

  return camelCaseText.replace(/\s/g, "");
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
