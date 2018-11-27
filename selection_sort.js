//your code here
function SelectionSort(arr) {
  var temp = '';
  var needSwap = false;
  var index = 0;
  for (var i = 0; i < arr.length; i++) {
    var min = arr[i];
    for (var j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        needSwap = true;
        index = j;
      }
      // console.log(min, arr[j], needSwap);
    }
    if (needSwap === true) {
      temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
    needSwap = false;
  }
  return arr;
}

console.log(SelectionSort([4,5,1,3,2]));
console.log(SelectionSort([4213,1542,123,54,121,2]));
