function telephoneWords(digitString) {
  // storage for result
  const storage = [];
  // object with values of strings related to numbered keys
  const phoneObj = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ',
  };

  const buildStorage = function (digitstring, index) {
    if (index === digitString.length) {
      storage.push(digitstring);
    } else {
      const newDigitString = digitString.split('');

      for (let i = 0; i < phoneObj[digitString[index]].length; i++) {
        newDigitString[index] = phoneObj[digitString[index]][i];
        buildStorage(newDigitString.join(''), index + 1);
      }
    }
  };
  buildStorage(digitString, 0);
  return storage;
}


console.log(telephoneWords('0232'));
