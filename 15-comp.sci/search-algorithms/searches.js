function binarySearch(arr, element){

  let start = 0;
  let end = arr.length - 1;
  let midPoint = Math.floor((start + end) / 2);

  while(arr[midPoint] !== element && start < end) {
    if (element < arr[midPoint]) {
      end = midPoint - 1;
    } else {
      start = midPoint + 1;
    }
    midPoint = Math.floor((start + end) / 2);
  }

  return (arr[midPoint] === element) ? midPoint : -1;
}

function recursiveBinarySearch(arr, element, midPoint=Math.floor((arr.length-1)/2), start=0, end=arr.length-1){
  // console.log({arr, element, midPoint, start, end}); // Use this a lot.

  if (arr[midPoint] === element) {
    return midPoint;
  }

  if (start >= end) {
    return -1;
  }

  if (element > arr[midPoint]) {
    start = midPoint + 1;
  } else {
    end = midPoint - 1;
  }

  midPoint = Math.floor((start + end) / 2);
  return recursiveBinarySearch(arr, element, midPoint, start, end);
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
