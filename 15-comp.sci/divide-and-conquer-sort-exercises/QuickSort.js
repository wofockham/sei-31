// recursive
function quickSort(arr){
  if (arr.length <= 1) {
    return arr; // base case
  }

  const pivot = arr.pop(); // this could be .shift()
  const left = arr.filter((item) => item <= pivot); // Values less than or equal to pivot
  const right = arr.filter((item) => item > pivot); // Values greater than pivot

  return quickSort(left).concat([pivot], quickSort(right)); // Mysterious
}

module.exports = quickSort;
