function bubbleSort(array) {

  let swapped = true;

  let end = array.length;

  while (swapped === true) {
    swapped = false;
    for (let i = 0; i < end; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;

        swapped = true;
      }
    }
    end--;
  }

  return array;
}

module.exports = bubbleSort;
