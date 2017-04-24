const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function translateRomanNumeral(romanNumeral) {
  // iterate through length of roman numeral
  const newString = romanNumeral.split('');
  return newString.reduce((accum, letter, index) => {
    if (accum !== 'null') {
      if (DIGIT_VALUES[letter] === undefined) {
        return 'null';
    // if end, add to total
      } else if (index === newString.length - 1) {
        return accum + DIGIT_VALUES[letter];
    // if i val is < i+1, subtract from accum
      } else if (DIGIT_VALUES[letter] < DIGIT_VALUES[newString[index + 1]]) {
        return accum - DIGIT_VALUES[letter];
    // else add to accum
      } else {
        return accum + DIGIT_VALUES[letter];
      }
    }

    return 'null';
  }, 0);
}

console.log(translateRomanNumeral('Vhorse'));
