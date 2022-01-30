const reverseString = (string) => {
  let index = string.length - 1;
  let gnirts = "";
  while (index >= 0) {
    gnirts += string[index];
    index--;
  }
  return gnirts;
};

export default reverseString;
