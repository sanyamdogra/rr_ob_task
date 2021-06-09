export const generateSquare = (character, size) => {
  let opStr = "";

  for (let i = 1; i <= size; i++) {
    for (let j = 0; j < size; j++) {
      opStr += character;
    }
    opStr += "\n";
  }

  return opStr;
};
