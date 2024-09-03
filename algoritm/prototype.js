const game1 = [2.27,3.55,3.05]
const game2 = [3,3.45,2.35]
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




console.log(contas)
console.log(odds)
 