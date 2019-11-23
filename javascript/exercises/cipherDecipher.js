function cipherDecipher(someString, offset) {
  const ALPHABET_STRING = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
  const ALPHABET_ARRAY = ALPHABET_STRING.split(",");
  let result = "";

  for (let i = 0; i < someString.length; i++) {
    let character = someString[i];
    let isUpperCaseCharacter = character == character.toUpperCase();
    let lowerCaseCharacter = character.toLowerCase();
    let characterIndex = ALPHABET_ARRAY.indexOf(lowerCaseCharacter);

    if (characterIndex == -1) {
      // character is not in the alphabet, so don't cypher it
      result += someString[i];
    } else {
      let newCharacterIndex = characterIndex + offset;

      if (newCharacterIndex >= 26) {
        // we are ciphering and went past the end of the alphabet
        newCharacterIndex = newCharacterIndex - 26;
      } else if (newCharacterIndex < 0) {
        // we are deciphering and went past the beginning of the alphabet
        newCharacterIndex = 26 + newCharacterIndex;
      }

      let newCharacter = ALPHABET_ARRAY[newCharacterIndex];
      if (isUpperCaseCharacter) {
        newCharacter = newCharacter.toUpperCase();
      }
      result += newCharacter;
    }
  }

  return result;
}

function cipher(someString, offset) {
  return cipherDecipher(someString, offset);
}

console.log(cipher("Genius without education is like silver in the mine", 13));

//--------------------------------

function decipher(someString, offset) {
    return cipherDecipher(someString, -offset);
  }
  
  
  console.log(
    decipher("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", -13)
  );
  console.log(
    decipher(cipher("This string will got ciphered and then deciphered!", 13), 13)
  );
  