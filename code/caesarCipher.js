function convertToAscii(string) {
  const asciiArray = [];
  for (let i = 0; i < string.length; i += 1) {
    asciiArray.push(string.charCodeAt(i));
  }
  return asciiArray;
}
function shiftAscii(asciiArray, shift) {
  const shiftedAsciiArray = [];
  asciiArray.forEach((ascii) => {
    let shiftedAscii;
    // if ascii numbers equal letters, apply shift
    if ((ascii >= 65 && ascii < 90) || (ascii >= 97 && ascii < 122)) {
      shiftedAscii = ascii + shift;
    // if ascii number equals z, turn it into ascii number of a
    } else if (ascii === 90 || ascii === 122) {
      shiftedAscii = ascii - 25;
    }
    // if ascii number is not a letter, do not apply shift
    if (ascii < 65 || (ascii > 90 && ascii < 97) || ascii > 122) {
      shiftedAscii = ascii;
    }
    shiftedAsciiArray.push(shiftedAscii);
  });
  return shiftedAsciiArray;
}
function convertToString(shiftedAsciiArray) {
  const string = [];
  shiftedAsciiArray.forEach((shiftedAscii) => {
    string.push(String.fromCharCode(shiftedAscii));
  });
  return string.join("");
}
function caesarCipher(string, shift) {
  const asciiArray = convertToAscii(string);
  const shiftedAsciiArray = shiftAscii(asciiArray, shift);
  const shiftedString = convertToString(shiftedAsciiArray);
  return shiftedString;
}

export default caesarCipher;
