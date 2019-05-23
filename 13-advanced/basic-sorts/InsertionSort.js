function insertionSort (items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    for (var j = i-1; j >= 0 && items[j] > item; j--) {
      items[j + 1] = items[j];
    }

    items[j + 1] = item;

  }

  return items;
}

module.exports = insertionSort;
