function selectionSort(arr) {
    //your code here
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        let tmp = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        arr[i] = arr[minIndex]
        arr[minIndex] = tmp
    }
    return arr
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));