
function selectionSort(number) {
    for(let i = 0; i < number.length; i++) {
        let smallestIndex = i;
        let temp;
        // console.log(number)
        for(let j = i+1; j < number.length; j++) {
            if(number[j] < number[smallestIndex]) {
                smallestIndex = j
            }
        }
        if( i !== smallestIndex) {
            temp = number[i];
            number[i] = number[smallestIndex];
            number[smallestIndex] = temp
        }
    }
    return number
}

console.log(selectionSort([33, 2, 52, 106, 73]));
// console.log(selectionSort([13, 5, 22, 99, 11]));
