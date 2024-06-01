// S3-21

function capturarNota(nota) {
  if (nota <= 0 || nota > 10 || isNaN(nota)) {
    alert("Digite uma nota válida");
  }
}
alert("Bem vindo a calculadora de notas e presença!");
let nome = prompt("Digite seu nome e sobrenome:");
if (nome.length < 5) {
  alert("Nome inválido");
}
let nota1 = parseFloat(prompt("Qual foi a sua nota em Português?"));
capturarNota(nota1);
let nota2 = parseFloat(prompt("Qual foi a sua nota em Matemática?"));
capturarNota(nota2);
let nota3 = parseFloat(prompt("Qual foi a sua nota em Geografia?"));
capturarNota(nota3);
let nota4 = parseFloat(prompt("Qual foi a sua nota em Filosofia?"));
capturarNota(nota4);
let nota5 = parseFloat(prompt("Qual foi a sua nota em História?"));
capturarNota(nota5);
let nota6 = parseFloat(prompt("Qual foi a sua nota em Sociologia?"));
capturarNota(nota6);
let nota7 = parseFloat(prompt("Qual foi a sua nota em Biologia?"));
capturarNota(nota7);
let nota8 = parseFloat(prompt("Qual foi a sua nota em Educação Física?"));
capturarNota(nota8);
let nota9 = parseFloat(prompt("Qual foi a sua nota em Artes?"));
capturarNota(nota9);
let nota10 = parseFloat(prompt("Qual foi a sua nota em Física?"));
capturarNota(nota10);
let nota11 = parseFloat(prompt("Qual foi a sua nota em Inglês?"));
capturarNota(nota11);
let nota12 = parseFloat(prompt("Qual foi a sua nota em Redação?"));
capturarNota(nota12);
let nota13 = parseFloat(prompt("Qual foi a sua nota em Química"));
capturarNota(nota13);

let somaDasNotas =
  nota1 +
  nota2 +
  nota3 +
  nota4 +
  nota5 +
  nota6 +
  nota7 +
  nota8 +
  nota9 +
  nota10 +
  nota11 +
  nota12 +
  nota13;
let mediaDasNotas = somaDasNotas / 13;

let notaDePresenca = parseInt(prompt("Digite sua nota de presenca:"));
capturarNota(notaDePresenca);

if (mediaDasNotas >= 6 && notaDePresenca >= 6) {
  alert(
    `A nota do aluno(a) ${nome} é de ${mediaDasNotas} e sua presença de ${notaDePresenca}. Aluno(a) Aprovado!`
  );
} else {
  alert(
    `A nota do aluno(a) ${nome} é de ${mediaDasNotas} e sua presença de ${notaDePresenca}. Aluno(a) Reprovado.`
  );
}
