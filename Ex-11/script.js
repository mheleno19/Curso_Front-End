// Exercicio 03

const N = 5;
let soma = 0;

for (let i = 1; i <= N; i++) {
  soma += i;
}

const media = soma / N;

console.log(`Soma:${soma}, Média:${media}`);

// Exercicio 04

const secreto = 19;
const palpites = [2, 5, 7, 15, 20];

let i = 0;

while (i < palpites.length && palpites[i] !== secreto) {
  i++;
}
if (i < palpites.length) {
  console.log("🎉 Você acertou o número secreto!");
} else {
  console.log("❌ Ainda não... tente novamente.");
}
