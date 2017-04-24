function anagramPosition(string) {
  const sortedAnagramArray = [];
  // order original string
  const splitString = string.split('').sort();
  // build anagrams, not including duplicate
  const buildAnagram = (remainder, substring) => {
    if (substring.length === 1) {
      remainder.push(substring[0]);
      const tempString = remainder.join('');
      if (!sortedAnagramArray.includes(tempString)) {
        sortedAnagramArray.push(tempString);
      }
    } else {
      for (let i = 0; i < substring.length; i++) {
        const tempSubstring = substring.slice();
        const tempRemainder = remainder.slice();
        tempRemainder.push(tempSubstring.splice(i, 1)[0]);
        buildAnagram(tempRemainder, tempSubstring);
      }
    }
  };

  buildAnagram([], splitString);
  // return indexof original string
  return sortedAnagramArray.indexOf(string) + 1;
}

console.log(anagramPosition('BABS'));

#ofpossibilities/#ofduplicates