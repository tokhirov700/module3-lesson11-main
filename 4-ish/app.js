
function goal (params) {

    let goals = [5, 10, 2 ];
    let total = 0;

    goals.forEach( goal => total += goal)
   return (total)
}

let result = goal()

console.log(result)