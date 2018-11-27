//your code here
function sort(input) {
    for (let i = 0; i < input.length; i++) {
        var small = input[i]
        for (let j = i + 1; j < input.length; j++) {
            if (input[j] < small) {
                var x = small
                small = input[j]
                input[j] = x
            }
        }
        input[i] = small
    }
    return input
}


console.log(sort([33, 2, 52, 106, 73]));
console.log(sort([13, 5, 22, 99, 11]));