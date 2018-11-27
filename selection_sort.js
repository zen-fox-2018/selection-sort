function selectionSort(input) {
  let array = input
  for (let i = 0; i < array.length; i++) {
    let min = array[i]
    // console.log(array, min);
    for (let j = i+1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j]
        let temp = 0
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}

//Test Case
console.log(selectionSort([33,2,52,106,73])); // [2,33,52,73,106]
console.log(selectionSort([13,5,22,99,11])); // [5,11,13,22,99]
console.log(selectionSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

