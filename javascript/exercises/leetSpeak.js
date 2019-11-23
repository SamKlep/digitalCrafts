function leetSpeak(someText) {
  let newText = "";
  for (let i = 0; i < someText.length; i++) {
    let character = someText[i];
    switch (character.toLowerCase()) {
      case "a": {
        character = "4";
        break;
      }
      case "e": {
        character = "3";
        break;
      }
      case "g": {
        character = "6";
        break;
      }
      case "l": {
        character = "1";
        break;
      }
      case "o": {
        character = "0";
        break;
      }
      case "s": {
        character = "5";
        break;
      }
      case "t": {
        character = "7";
        break;
      }
    }
    newText += character;
  }

  return newText;
}

console.log(leetSpeak("leet"));