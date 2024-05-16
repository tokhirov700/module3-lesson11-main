


function calculateAverage() {
    let arr = [ 2, 3, 7, 5, 9]
    let sum = 0;
    for(let i = 0; i < arr.length; i++){

        sum = sum + arr[i]
   
    }
    return (sum / arr.length)
}

let result = calculateAverage()
console.log(result)



