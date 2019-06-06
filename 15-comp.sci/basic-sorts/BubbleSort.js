function bubbleSort(array) {

  let swapped = true; // Assume the worst
  // We don't need to consider elements that have bubbled to the end.
  let end = array.length;

  while (swapped === true) {
    swapped = false;
    for (let i = 0; i < end; i++) {
      if (array[i] > array[i + 1]) {

        // ES6ier with parallel assignment/destructuring:
        [ array[i], array[i+1] ] = [ array[i+1], array[i] ];

        swapped = true;
      }
    }
    end--;
  }

  return array;
}

module.exports = bubbleSort;
