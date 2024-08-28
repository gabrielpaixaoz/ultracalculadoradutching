const VALOR_INVESTIDO = 100
let odds = [3.00,3.80,3.50]
let probabilidade_geral = odds.map(valor => 1 / valor).reduce((a, b) => a+ b, 0)
let investimentos = odds.map(valor => (VALOR_INVESTIDO/valor)/probabilidade_geral).map(valor => valor.toFixed(2))
let retornos = investimentos.map((item, index) => item * odds[index])
let lucro = retornos[0] - VALOR_INVESTIDO
const CONTAS = 4 
const QTD_CONTAS = 25
let contasQtdContas = new Array(CONTAS).fill(QTD_CONTAS)

let teste = contasQtdContas.map((item, index) => { 
    investimentos[index] - item
    if(investimentos[index] > 0){
        return item
    }
    else{
        
    }
})


let contas = {conta1: [25], conta2: [12,13] }

console.log(contas)

//[]

console.log(teste)


console.log(lucro)
console.log(investimentos)
console.log(retornos) 