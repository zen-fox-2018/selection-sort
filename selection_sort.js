function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i]
        let indexMin = i
        for (var j = i+1; j < arr.length; j++) {
            if (arr[j] < min) {
                // console.log(arr);
                min = arr[j]
                indexMin = j
                // console.log(min, indexMin);
            }
        }
        arr[indexMin] = arr[i]
        arr[i] = min
        // console.log(arr);
    }
    return arr
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));
