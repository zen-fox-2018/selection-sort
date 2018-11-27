//your code here
function sort(input) {
    for (let i = 0; i < input.length; i++) {
        var small = input[i]
        var tempIndex = i
        for (let j = i + 1; j < input.length; j++) {
            if (input[j] < small) {
                small = input[j]
                tempIndex = j
                
            }
        }
        // console.log(small);
        var temp = input[i]
        input[i] = input[tempIndex]
        input[tempIndex] = temp
        console.log(input);


    }
    return input
}


console.log(sort([33, 2, 52, 106, 1, 73]));
// console.log(sort([13, 5, 22, 99, 11]));