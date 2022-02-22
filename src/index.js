
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix.length > 0) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let matrixItem = (i % 2) ? matrix[i].length - 1 - j : j;
        result.push(matrix[i][matrixItem]);
      }
    }
  } else {
    return result;
  }
  return result;
}
