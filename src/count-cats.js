module.exports = function countCats(matrix) {
  let catsNumber = 0;
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (matrix[i][j] === '^^') {
        catsNumber++;
      }
    }
  }

  return catsNumber;
};
