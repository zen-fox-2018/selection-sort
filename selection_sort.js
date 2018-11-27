//your code here
function selectionSort(array) {
    for (var i = 0; i <= array.length-1; i++){
        var smallest = array[i]
        for (var j = i+1; j <= array.length-1; j++){
            if (array[j] <= smallest) {
                var smallest = array[j]
                var index = j
            } 
        }
        // console.log(array, smallest)
        if (smallest != array[i]) {
            var temp = array[i]
            array[i] = smallest
            array[index] = temp
        } 
        
        // console.log(i, smallest)
        // console.log(array)
    }
    return array
}
console.log(selectionSort([33, 2, 52, 106, 73]))
//[2, 33, 52, 73, 106]
console.log(selectionSort([13, 5, 22, 99, 11]))
//[5, 11, 13, 22, 99]
