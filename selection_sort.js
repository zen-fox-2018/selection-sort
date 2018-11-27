//your code here
function selectionSort(arr){
    for (let i = 0 ; i < arr.length; i++) {
        let indexmin = i
        let temp;
        for (let j = i+1 ; j < arr.length; j++) {
            if (arr[indexmin] > arr[j]) {
                indexmin = j
            }
        }
        if (i !== indexmin) {
            temp = arr[i]
            arr[i] = arr[indexmin]
            arr[indexmin] = temp
        }
    }
    return arr
}


let arr = [2,5,1,7,3,1,10]
console.log(selectionSort(arr))
