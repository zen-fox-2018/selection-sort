//your code here
function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let firstNum = array[i]
        let smallestNum = array[i+1]
        let indexsmallestNum = i+1
        //loop untuk cari angka terkecil
        for(let j = i+1; j < array.length; j++) {
            //set angka terkecil & simpan index nya
            if(smallestNum > array[j]){
                smallestNum = array[j]
                indexsmallestNum = j   
            }
        }
        //swap
        if(firstNum > smallestNum) {
            array[i] = smallestNum
            array[indexsmallestNum] = firstNum
        }
    }
    return array
}

console.log(selectionSort([33, 2, 52, 106, 73])) // [2, 33, 52, 73, 106]
console.log(selectionSort([13, 5, 22, 99, 11])) //[5, 11, 13, 22, 99]