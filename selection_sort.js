function selectionSort(input) {

  for (var i = 0; i < input.length; i++) {
    var indexMin = i;
    for (var j = i+1; j < input.length; j++) {
      if (input[j] < input[indexMin]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      var temp = input[i];
      input[i] = input[indexMin];
      input[indexMin] = temp;
    }
  }
  return input;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([5, 11, 13, 22, 99]));
