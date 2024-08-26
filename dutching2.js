const VALOR_INVESTIDO = 100
let odds = [3.00,3.80,3.50]
let probabilidade_geral = odds.map(valor => 1 / valor).reduce((a, b) => a+ b, 0)
let investimentos = odds.map(valor => (VALOR_INVESTIDO/valor)/probabilidade_geral)
let retornos = investimentos.map((item, index) => item * odds[index])
let lucro = retornos[0] - VALOR_INVESTIDO

console.log(lucro)
console.log(investimentos)
console.log(retornos) 