const removeFromArray = function (array, ...queries) {
  for (q of queries) {
    if (array.includes(q)) {
      array = array.filter(value => value != q)
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
