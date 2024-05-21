// Exercício 1
let a = parseInt(prompt("Insira um valor para salvar:"));
alert(`O valor digitado foi o: ${a}.`);

// Exercício 2
let y = parseInt(prompt("Insira o primeiro valor para somar:"));
let x = parseInt(prompt("Insira o segundo valor para somar:"));
let z = parseInt(prompt("Insira o terceiro valor para somar:"));
let somaFinal = y + x + z;
alert(`O valor final foi: ${somaFinal}`);

// Exercício 3
let q = parseInt(prompt("Insira a primeira nota semestral:"));
let w = parseInt(prompt("Insira a segundo nota semestral:"));
let mediaSemestral = (q + w) / 2;
alert(`A média das duas notas foi: ${mediaSemestral}`);

// Exercício 4
let e = parseInt(prompt("Insira um valor para calcular:"));
let divisao = e % 2;
alert(`O valor final foi: ${divisao}`);

// Exercício 5
let r = parseInt(prompt("Insira um valor para calcular:"));
let quadradoDoNumero = r * r;
alert(`O quadrado de ${r} é ${quadradoDoNumero}`);

// Exercício 6
let t = parseInt(prompt("Insira o primeiro valor:"));
let u = parseInt(prompt("Insira o segundo valor:"));
let v = parseInt(prompt("Insira o terceiro valor:"));
let i = parseInt(prompt("Insira o quarto valor:"));
let mediaPonderada = (t * 1 + u * 2 + v * 3 + i * 4) / 10;
alert(`O valor final foi: ${mediaPonderada}`);

// Exercício 7
let d = parseInt(prompt("Insira a nota de matemárica:"));
let f = parseInt(prompt("Insira a nota de português:"));
let g = parseInt(prompt("Insira a nota de conhecimentos gerais:"));
let h = parseInt(prompt("Insira a nota de informática:"));
let mediaPonderadaDasNotas = ((d * 2) + f + g + h) / 5
alert(`O valor final foi: ${mediaPonderadaDasNotas}`);

// Exercício 8
let j = parseInt(prompt("Insira um número inteiro:"));
let k = parseInt(prompt("Insira outro número inteiro:"));
alert(`Será feito a divisão entre ${j} e ${k}.`);
let divisaoDosNumeros = j / k;
alert(`O resultado foi ${divisaoDosNumeros}.`);
let restoDaDivisaoDosNumeros = j % k;
alert(`O resto que sobrou da divisão foi ${restoDaDivisaoDosNumeros}.`);

// Exercício 9
let saldo = parseFloat(prompt("Insira o valor da aplicação:"));
let valorFinalDaAplicacao = saldo * 1.01;
alert(`O valor final será ${valorFinalDaAplicacao}.`);

// Exercício 10
alert(`Vamos calcular a área de um losango.`);
let b = parseFloat(prompt("Insira a diagonal maior:"));
let n = parseFloat(prompt("Insira a diagonal menor:"));
let areaDoLosango = (b * n) / 2;
alert(`A área do losango é ${areaDoLosango}.`);
