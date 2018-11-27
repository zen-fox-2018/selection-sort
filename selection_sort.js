function selectionSort(arr) {
    let array = arr
    
    for (let i = 0; i < array.length; i++) {
        let lastIndex2 = i
        
        for (let j = i + 1; j < array.length; j++) {

            if (array[j] < array[lastIndex2]) {
                lastIndex2 = j
            }
        }
        let temp = array[i]
        array[i] = array[lastIndex2]
        array[lastIndex2] = temp
    }
    return array
}

console.log(selectionSort([2, 7, 3, 4, 1, 5, 6, 2, 9]));

