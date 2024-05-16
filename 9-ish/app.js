function totalScore() {
    let score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;
    score.forEach(n => {
        sum += n 
    })
    return Math.trunc( sum / score.length)
}
    let result = totalScore()
    console.log(result)