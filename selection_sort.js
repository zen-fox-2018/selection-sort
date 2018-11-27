//your code here
//input
// [33,2,52,106,73]

// [13,5,22,99,11]

//output 
// [2,33,52,73,106]

// [5,11,13,22,99]

//link  Visu Algo.net cari yang selection

function selectionSort(array) {
    var j=0
    while(j!=array.length){
        var tampung=[]
        var temp=j
        var checkArray=array[j]
        for(var i= j; i<array.length; i++){
            if(array[i] < checkArray){
                temp=i
                checkArray = array[i]
            }
        }
        tampung = array[j]
        array[j]=array[temp]
        array[temp] = tampung
        j++
    }
    return array
}

console.log(selectionSort([33,2,52,106,73,22,1,3]))
console.log(selectionSort([11,5,99,22,13]))