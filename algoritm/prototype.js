const game1 = [1.52,3.75,8.25]
const game2 = [2.47,3.05,3.40]
let multiplicateFactor = game2[0]
let multiplicateFactor2 = game2[1]
let multiplicateFactor3 = game2[2]
let part1 =  game1.map(item => +(item * multiplicateFactor - 1).toFixed(2))
let part2 = game1.map(item => +(item * multiplicateFactor2 - 1).toFixed(2))
let part3 = game1.map(item => +(item * multiplicateFactor3 - 1).toFixed(2))

let contas = new Array(8).fill(25)
let currentIndex = 0

function useValue(amount){
    if(buffer[currentIndex] >= amount){
        
    } 
}


let odds = [...part1,...part2,...part3]


let probabiliaddes = odds.map((odd) =>{
    return 1 / odd
})

console.log(contas)
console.log(odds, probabiliaddes)
 