function bucketSort(items, numBuckets=5) {

  if (items.length === 0) {
    return items;
  }

  const bucketSize = numBuckets;
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < items.length; i++) {
    if (items[i] < min) {
      min = items[i];
    }

    if (items[i] > max) {
      max = items[i];
    }
  }

  // make buckets every bucketSize between min and max
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = new Array(bucketCount);

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // divide the into buckets
  for (let i = 0; i < items.length; i++) {
    buckets[ Math.floor( (items[i] - min) / bucketSize ) ].push( items[i] );
  }

  // sort the individual buckets
  items = [];
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = classicSort( buckets[i] );
    items = items.concat( buckets[i] );
  }

  return items;
}

const classicSort = (a) => {
  return a.sort((a, b) => {
    // return negative, positive or 0: in order, out of order or equal
    return a - b;
  });
};

module.exports = bucketSort;
