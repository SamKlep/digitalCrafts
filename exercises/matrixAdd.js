// matrixA and MatrixB are two-dimensional arrays
function matrixAdd(matrixA, matrixB) {
  resultMatrix = [];
  let numRows = matrixA[0].length;
  let numColumns = matrixA.length;

  for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
    resultMatrix[rowIndex] = [];
    for (let columnIndex = 0; columnIndex < numColumns; columnIndex++) {
      resultMatrix[rowIndex][columnIndex] =
        matrixA[rowIndex][columnIndex] + matrixB[rowIndex][columnIndex];
    }
  }

  return resultMatrix;
}

//console.log(matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]));

// matrixA and MatrixB are two-dimensional arrays of size 2x2
function matrixMultiply(matrixA, matrixB) {
    var resultMatrix = [];
  
    for (var rowIndex = 0; rowIndex < 2; rowIndex++) {
      resultMatrix[rowIndex] = [];
      for (var columnIndex = 0; columnIndex < 2; columnIndex++) {
        var sum = 0;
        for (var sumIndex = 0; sumIndex < 2; sumIndex++) {
          sum += matrixA[rowIndex][sumIndex] * matrixB[sumIndex][columnIndex];
        }
        resultMatrix[rowIndex][columnIndex] = sum;
      }
    }
    return resultMatrix;
  }
  
  console.log(matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]));