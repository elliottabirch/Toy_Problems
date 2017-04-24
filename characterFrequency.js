function characterFrequency(string) {
  const stringArray = string.split('').sort();
  const freqArray = stringArray.reduce((accum, letter) => {
    if (accum[accum.length - 1] && accum[accum.length - 1][0] === letter) {
      accum[accum.length - 1][1]++;
    } else {
      accum.push([letter, 1]);
    }
    return accum;
  }, []).sort(([x, a], [y, b]) => (a === b ? x.charCodeAt() - y.charCodeAt() : b - a));
  return freqArray;
}

characterFrequency('supercalifragilisticexpialidocious');

