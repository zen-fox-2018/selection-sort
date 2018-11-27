function selection(input) {

  for (let i = 0; i < input.length; i++) {
    let temp = input[i]
    var indexmin = i
    // console.log(input)
    for (let j = i+1 ; j < input.length; j++) { 
      // console.log(j)
      if (input[j] < input[indexmin]) {
        // min = input[j]
        indexmin = j
      } 
    }
    //swap
    if (i !== indexmin) {
      input[i] = input[indexmin]
      input[indexmin] = temp
    }
  }
  return input
}

console.log(selection([ 33 , 2 , 52 , 106 , 73 ]))
console.log(selection([ 13 , 5 , 22 , 99 , 11 ]))