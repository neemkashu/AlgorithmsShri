// https://en.wikipedia.org/wiki/Binary_search_algorithm

export function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length;

  while ( left < right) {
    let m = Math.ceil((left + right) / 2)
    if (arr[m] < value) {
      left = m;
    } else {
      right = m - 1;
    }
  }

  return arr[left] === value ?  left : arr[left + 1] === value ? left + 1 : undefined;
}
