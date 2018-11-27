function selectionSort(arr){
 let   result = []
 //var unsorted = true
// while(unsorted){
//     unsorted =  false
//       for(i = 0; i < arr.length; i ++){
//           if(arr[i] > arr[i+1]){
//               temp = arr[i]
//               arr[i] = arr[i+1]
//               arr[i+1] = temp
//               unsorted = true
//           }
        
//       }
  
// }
var temp = 0
    for(var i = 0; i < arr.length; i ++){
        let minNum = arr[i]
        let minIdx = i
        for(var j = i; j <arr.length; j ++)
            if(minNum > arr[j]){
                minNum = arr[j]
                minIdx = j

            }
      temp = arr[i]
      arr[i] = arr[minIdx]
      arr[minIdx] = temp
             
    }
    return arr
}

console.log(selectionSort([33,2,52,106,73]))
console.log(selectionSort([13,5,22,99,11]))