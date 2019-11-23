function longLongVowels(text) {
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    let character = text[i];
    if (
      character == "a" ||
      character == "e" ||
      character == "i" ||
      character == "o" ||
      character == "u"
    ) {
      character = character.repeat(5);
    }
    newText += character;
  }
  return newText;
}

console.log(longLongVowels("long vowel"));