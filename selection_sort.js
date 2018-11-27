//your code here

function selectionSort(arr){
    
    for(var i=0; i<arr.length-1; i++){
        var min = arr[i]
        var indexMin=i

        for(var j=i; j<arr.length; j++){
            if(min>arr[j]){
                min=arr[j]
                indexMin= j
            }
        }
        
        [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]] 

    }

    return arr
}

console.log(selectionSort([33,2, 52, 106, 73]));

console.log(selectionSort([13,5, 22, 99, 11]));


