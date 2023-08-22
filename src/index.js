module.exports = function check(str, bracketsConfig) {

  let idx = 0;
  let openingBracketsArray = bracketsConfig.map(bracket => bracket[0]);
  let closingBracketsArray = bracketsConfig.map(bracket => bracket[1]);
  let arr = str.split('');


  const isAdjacent = (idx) => {
    if (openingBracketsArray.indexOf(arr[idx]) === -1) return false
    if (openingBracketsArray.indexOf(arr[idx]) === closingBracketsArray.indexOf(arr[idx + 1])) return true;
    else return false
  }

  const hasAdjacent = () => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (isAdjacent(i)) return true;
    }
    return false;
  }

  if ((arr.length % 2 !== 0) || (!openingBracketsArray.includes(arr[0]))) return false

  else {
    while (hasAdjacent()) {
      idx = 0
      while (true) {
        if (isAdjacent(idx)) {
          arr.splice(idx, 2);
          break
        }
        idx++;
      }

    }
    if (arr.length === 0) return true;
  }
  return false
}
