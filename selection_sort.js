// PSEUDOCODE
/*
FOR `i` is 0 to length of `arr` minus 1,
  STORE `min` to `i`
  FOR `j` is `i` plus 1 loop to length of `arr`
    IF value of `arr` with index `min` is more than `arr` with index `j`
      SET value of `min` to `j`
  ENDFOR
  // SWAP HERE
  STORE `tmp` to value of `arr` wuth index `i`
    SET value of `arr` with index `i` to `arr` with index `min`
    SET value of `arr` with index `min` to `tmp`
RETURN `arr`
*/

//your code here
function selection(arr){
  for (let i = 0 ; i < arr.length - 1 ; i++){
    let min = i
    for (let j = i+1 ; j < arr.length ; j++){
      if (arr[min] > arr[j]){
        min = j
        // console.log('min ===', arr[min])
      }
    }
    let tmp = arr[i]
    arr[i] = arr[min]
    arr[min] = tmp
    // console.log(arr)
  }

  return arr
}


console.log(selection([8, 5, 7, 1, 9, 3]))
console.log(selection([5,6,4,7,2,3,9,1]))
