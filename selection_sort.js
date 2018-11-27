//your code here
function selectionSort(num){
    for(i=0; i<num.length; i++){
        var min = num[i]
        var temp = i
        for(j=i; j<num.length;j++){
            if (num[j]< num[temp]){
                var min = num[j]
                temp = j
            }
        }
        if(num[i] > min){
            var tampung  = num[i]
            num[i] = num[temp]
            num[temp] = tampung
        } 
    }
    return num
}

console.log(selectionSort([99, 33,2,52,106,73]))
console.log(selectionSort([13,5,22,99,11]))