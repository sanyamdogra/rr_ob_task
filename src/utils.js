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
export const generateTriangle = (character, size) => {
  let opStr = "";

  for (let i = 1; i <= size; i++) {
    for (let j = 0; j < i; j++) {
      opStr += character;
    }
    opStr += "\n";
  }

  return opStr;
};
export const generateCircle = (character, size) => {
  let opStr = "";
  let dist = parseFloat(0);

  for (let i = 0; i <= 2 * size; i++) {
    for (let j = 0; j <= 2 * size; j++) {
      dist = Math.sqrt((i - size) * (i - size) + (j - size) * (j - size));
      if (dist > size - 0.5 && dist < size + 0.5) opStr += character;
      else opStr += " ";
    }
    opStr += "\n";
  }

  return opStr;
};
