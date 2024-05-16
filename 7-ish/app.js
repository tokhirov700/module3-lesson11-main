 function fn(params) {
    let num = 1;
    let sqrt = parseInt(Math.sqrt(num));
    let count = 0
    for(let i = 0; i <= sqrt; i++){
    
        if ( num % i == 0) {
            count++
        }
    }
    if ( count <= 1) {
        console.log("Tub son")
    }
    else{
        console.log("Murakkab son")
    }
}
 fn()