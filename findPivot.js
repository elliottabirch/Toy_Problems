const findPivot = function (array) {
  const isAlphabetical = function (first, second) {
    for (var i = 0; i < first.length; i++) {
      if (first.charCodeAt(i) > second.charCodeAt(i)) {
        return false;
      } else if (first.charCodeAt(i) < second.charCodeAt(i)) {
        return true;
      }
    }
    return true;
  };
  for (var i = 1; i < array.length; i++) {
    if (!isAlphabetical(array[i - 1], array[i])) {
      return i;
    }
  }
  return null;
};

console.log(findPivot(['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat']));
