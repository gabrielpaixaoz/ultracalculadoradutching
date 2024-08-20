const game1 = [1.52,3.75,8.25]
const game2 = [2.47,3.05,3.40]
let multiplicateFactor = game2[0]
let part1 =  game1.map(item => +(item * multiplicateFactor - 1).toFixed(2))
parseFloat(part1)
console.log(part1)