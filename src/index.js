
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
  if (matrix) {
    for (let i = 0; i < matrix.length; i++) {
      let c = (i % 2 === 0) ? matrix[i] : matrix[i].reverse();
      for (let k = 0; k < c.length; k++ ) {
        result.push(c[k]);
        console.log(result + ',');
      }
    }
    return result;
  }
  return [];
}
