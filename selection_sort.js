//your code here
// function selectionSort(arr){
//   var min = 0;
//   var indexMin = 0;
//   for(var i = 0; i < arr.length; i++){
//     min = arr[i];
//     indexMin = i;
//     for(var j = i + 1; j < arr.length; j++){
//       if(arr[j] < min){
//         min = arr[j];
//         indexMin = j;
//       }
//     }
//     arr[indexMin] = arr[i];
//     arr[i] = min;
//   }
//   return arr;
// }

function selectionSort(arr){
  var indexMin = 0;
  for(var i = 0; i < arr.length; i++){
    indexMin = i;
    for(var j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[indexMin]){
        indexMin = j;
      }
    }
    var tempSwap = arr[indexMin];
    arr[indexMin] = arr[i];
    arr[i] = tempSwap;
  }
  return arr;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));
