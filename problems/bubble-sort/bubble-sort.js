// https://sortvisualizer.com/bubblesort/
// https://en.wikipedia.org/wiki/Bubble_sort
const swap = (i,j,arr) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp;
}

export function bubbleSort(arr) {
    let swapAmount = 0;
    let sortedCount = 0;

    do {
        swapAmount = 0;
        for (let index = 1; index < arr.length - sortedCount; index++) {
            const element = arr[index];
            const elementPrev = arr[index - 1]
            if (elementPrev > element) {
                swap(index, index-1, arr)
                swapAmount ++;
            }
        }
        sortedCount ++;
    } while (swapAmount > 0);
    return arr;
}
