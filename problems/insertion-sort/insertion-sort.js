// https://sortvisualizer.com/insertionsort/
// https://en.wikipedia.org/wiki/Insertion_sort
const swap = (i,j,arr) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp;
}
const drown = (arr, i) => {
    // [0, i] arr
    const element = arr[i]
    let current = arr[i - 1]
    while (element < current && i >= 1) {
        swap(i, i-1, arr)
        i--
        current= arr[i-1]
    }
}
export function insertionSort(arr) {
    for (let right = 1; right < arr.length; right++) {
        drown(arr, right)
    }
    return arr;
}
