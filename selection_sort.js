//your code here
function selectionSort(arr) {
for (let i = 0; i < arr.length; i++) {
  var indexGanti = i
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[indexGanti] > arr[j]) {
      debugger;
      indexGanti = j
    } 
  }
  var tmp = arr[i]
  arr[i] = arr[indexGanti]
  arr[indexGanti] = tmp 
  }
  return arr
}

console.log(selectionSort([5, 2, 7, 4, 21, 88, 3, 6, 90]))
console.log(selectionSort([33, 2, 52, 106, 73]))
console.log(selectionSort([13, 5, 22, 99, 11]))