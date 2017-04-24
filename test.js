function removeProperty(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return true;
  }
  return false;
}

const object = {
  a: 'a',
  b: 'b',
};


console.log(removeProperty(object, 'a'));

