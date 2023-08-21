// https://sortvisualizer.com/selectionsort/
// https://en.wikipedia.org/wiki/Selection_sort

const swap = (i,j,arr) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp;
}
const getMinIndex = (i, arr) => {
    // arr [i, arr.len - 1]
    let min = i;
    for (let index = i; index < arr.length; index++) {
        const element = arr[index];
        min = element < arr[min] ? index : min;
    }
    return min;
}

export function selectionSort(arr) {
    let left = 0;

    for (let index = 0; index < arr.length - 1; index++) {
        const min = getMinIndex(index, arr)
        swap(min, index, arr);
    }
    return arr;
}
