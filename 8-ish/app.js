function getCalculate(params) {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    let count ;
    let arr = []
    let sum = 0;
    let positive = numbers.filter(num => num >= 0);
    let negative = numbers.filter( item => item < 0);
    count = (positive.length)

    negative.forEach(n =>{
        sum += n
    })
    console.log(count,sum)
  

}
getCalculate()