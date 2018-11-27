function selectionSort(array) {
    
    for (var i = 0; i < array.length; i++) {
        var nilaiMinimum = array[i]
        var indeks = i // untuk menghandle bila loop j tidak terjadi
        for (var j = i; j < array.length; j++) {
            if (nilaiMinimum > array[j]) {
                nilaiMinimum = array[j]
                indeks = j                
            }            
        }        
        var temp = array[i]
        array[i] = array[indeks]
        array[indeks] = temp
    }
    return array

}

//testcase
console.log(selectionSort([33, 2, 52, 106, 73]))
console.log(selectionSort([13,5,22,99,11]))