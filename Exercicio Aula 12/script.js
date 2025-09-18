//Dobra um número
function dobrar(num) {
  return num * 2;
}
console.log(dobrar(10));

//Saudação com nome
function saudacao(nome = "Visitante") {
  return `Olá, ${nome}!`;
}
const name = "Maria";
console.log(saudacao(name));
console.log(saudacao());

//é par ou ímpar?
function ehPar(numero) {
  if (numero % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

ehPar(4);
ehPar(7);
ehPar(0);
ehPar(-2);
ehPar(-3);

// maior de dois números
function maiorNumero(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else num2 > num1;
  return num2;
}

console.log(maiorNumero(10, 5));
console.log(maiorNumero(3, 8));
console.log(maiorNumero(-2, -5));
console.log(maiorNumero(7, 7));

// Contar caracteres em uma palavra
function contarCaracteres(palavra) {
  return palavra.length;
}

console.log(contarCaracteres("Hello"));
console.log(contarCaracteres("Heleno"));
console.log(contarCaracteres(""));
console.log(contarCaracteres("FrontEnd"));
