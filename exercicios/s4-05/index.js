// // Exercício 1
// function somarDoisValores(valor1, valor2) {
//   let resultadoDaSoma = valor1 + valor2;
//   return resultadoDaSoma;
// }

// console.log(somarDoisValores(15, 876));

// Exercício 2
function valorETipo(x) {
  let tipoDoValor = typeof x;
  return tipoDoValor;
}

let x = parseInt(prompt("Digite o número de sua escolha:"));
console.log(`O valor ${x} é do tipo ${valorETipo(x)}.`);

// Exercício 3
function somaDosBimestres(nota1, nota2, nota3, nota4) {
  let somarNotas = nota1 + nota2 + nota3 + nota4;
  return somarNotas;
}

alert("Bem vindo a calculadora focada na soma de suas notas!");
let nota1 = parseInt(prompt("Digite a primeira nota:"));
let nota2 = parseInt(prompt("Digite a segunda nota:"));
let nota3 = parseInt(prompt("Digite a terceira nota:"));
let nota4 = parseInt(prompt("Digite a quarta nota:"));

if ((nota1, nota2, nota3, nota4 == typeof Number)) {
  console.log(somaDosBimestres(nota1, nota2, nota3, nota4));
} else {
  console.log("O campo só pode receber números.");
}
