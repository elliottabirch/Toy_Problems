function editDistance(str1, str2) {
  // store count var
  let count = 0;
  // store occurance of each letter from each string
  const decomposedStrings = [...arguments].map(val => val.split('').reduce((storage, letter) => {
    storage[letter] = (storage[letter] ? storage[letter] + 1 : 1);
    storage.length = val.length;
    return storage;
  }, {}));
  // iterate through string 2 storage
  for (const letter in decomposedStrings[1]) {
    const str1count = decomposedStrings[0][letter];
    const str2count = decomposedStrings[1][letter];

    // if str1[key] is false, add str2[key] to count
    if (!str1count) count += str2count;
    // if srt1[key] -  str2count[key] < 0, add absval[str1count[key]-str[countkey]]
    if (str1count - str2count < 0) count += Math.abs(str1count - str2count);
  }
  const difference = str1.length - str2.length;
  if (difference > 0) count += difference;
  return count + Math.abs(str1.length - str2.length);
}

editDistance('wednesday', 'sunday');
