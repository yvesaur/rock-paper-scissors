// Returns random number between 0 to num
function random(number) {
    return Math.floor(Math.random()*number);
}

// Acts as a sleep function that will delay given amount of seconds
function delay(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

// Binary Search a searching algorithm used in a sorted array by repeatedly dividing the search interval in half.
function binarySearch(array, value) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;
  
    while (leftIndex <= rightIndex) {
      const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  
      if (array[middleIndex] === value) {
        return middleIndex;
      } else if (array[middleIndex] < value) {
        leftIndex = middleIndex + 1;
      } else {
        rightIndex = middleIndex - 1;
      }
    }
  
    return -1; // Value not found
}