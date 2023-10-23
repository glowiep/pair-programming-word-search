// Pair programmed by Jordan atkins - Github @Atkinss1
// Pair programmed by Gloria Lim - Github @glowiep

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return "The matrix is empty.";
  }

  const horizontalJoin = letters.map(ls => ls.join(''));

  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
    else if (l.split("").reverse().join("").includes(word)) {
      return true;
    }
  }

  // Vertical logic matrix
  let row = letters.length;
  let column = letters[0].length;
  let newMatrix = [];

  for (let i = 0; i < column; i++) {
    let newRow = [];
    for (let j = 0; j < row; j++) {
      newRow.push(letters[j][i]);
    }
    newMatrix.push(newRow);
  }

  const verticalJoin = newMatrix.map(ls => ls.join(''));

  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
    else if (l.split("").reverse().join("").includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;