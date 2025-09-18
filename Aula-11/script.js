let nota = 8;

if (nota < 5) {
  console.log("Reprovado!");
} else if (nota >= 5 && nota < 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado!");
}

function saudar(nome) {
  console.log(`Olá, ${nome}!`);
}

saudar("maria");
saudar("joão");
saudar("Chris");
saudar("Jão");

function media(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

resultado1 = media(10, 8, 7);
resultado2 = media(7, 8, 7);
resultado3 = media(5, 6, 9);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

