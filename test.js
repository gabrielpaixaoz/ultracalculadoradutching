const buffer = [25, 25, 25, 25, 25, 25, 25, 25];
let currentIndex = 0;
let amounts = [55.51,18.48,7.88,41.94,14.62,6.32,36.61,12.99,5.64]; // array de valores a serem atendidos
let necessarios = [];

for (let amount of amounts) {
  let necessario = [];
  let valorRestante = amount;
  while (valorRestante > 0 && currentIndex < buffer.length) {
    const valorNecessario = Math.min(valorRestante, buffer[currentIndex]);
    necessario.push(valorNecessario);
    valorRestante -= valorNecessario;
    currentIndex++;
  }
  necessarios.push(necessario);
}

console.log(necessarios);
