// Exercício 1
alert("Bem vindo a calculadora de quilowatts!");
let salario = parseFloat(prompt("Digite o seu salário:"));
let consumo = parseFloat(prompt("Digite a quantidade consumida de energia:"));
let valorDoKW = salario / 7 / 100;
let valorTotal = valorDoKW * consumo;
alert(`O seu valor de cada KW é ${valorDoKW.toFixed(2)}`);
alert(`O valor total a ser pago é ${valorTotal.toFixed(2)}`);
let valorComDesconto = valorTotal * 0.9;
alert(
  `Se você pagar adiantado terá um desconto de 10%, ficando o valor de ${valorComDesconto.toFixed(
    2
  )}`
);

// Exercício 2
alert("Bem vindo a calculadora de desconto para comerciantes!");
alert("O desconto terá um valor pré-determinado de 9%.");
let precoProduto = parseFloat(prompt("Digite o valor do produto:"));
precoProdutoFinal = precoProduto * 0.91;
alert(`O valor final com desconto é ${precoProdutoFinal}.`);

// Exercício 3
let a = 10;
let b = 20;
let aux;
aux = a;
a = b;
b = aux;
alert(
  `Os valores originais de a e b: ${b}, ${a}. Após a troca são: ${a}, ${b}`
);

// Exercício 4
alert("Bem vindo a calculadora para locadoras de vídeo!");
let quantidadeDeFitas = parseInt(prompt("Quantas fitas sua locadora possui?"));
let valorPorFita = parseFloat(prompt("Qual o valor cobrado por fita?"));
alert(
  "Sabemos que um terço das fitas são alugadas por mês. Vamos calcular o faturamento anual de sua empresa."
);
let faturamentoMensal = (quantidadeDeFitas / 3) * valorPorFita;
let faturamentoAnual = faturamentoMensal * 12;
alert(
  `O faturamento anual da locadora é de R$ ${faturamentoAnual.toFixed(2)}.`
);

let multaPorAtraso = valorPorFita * 0.1;
let ganhosMensaisPorAtraso = quantidadeDeFitas * 0.1 * multaPorAtraso;
alert(
  `Quando o cliente atrasa a entrega, é cobrada uma multa de 10% sobre o valor do aluguel. Sabendo que um décimo das fitas alugadas no mês são devolvidas com atraso, sua locadora está lucrando o valor de R$ ${ganhosMensaisPorAtraso.toFixed(
    2
  )} por multas.`
);

let fitasAposPerdas = quantidadeDeFitas * 0.98;
let fitasNoFinalDoAno = fitasAposPerdas * 1.1;
alert(
  `Sabendo ainda que 2% das fitas se estragam ao longo do ano, e um décimo do total é comprado para reposição, a quantidade de fitas que a locadora terá no final do ano é de ${fitasNoFinalDoAno.toFixed(
    2
  )}.`
);

// Exercício 5
let numeroCDU1 = parseInt(prompt("Digite seu número:"));
let numeroCDUString1 = numeroCDU.toString();
let centenas = numeroCDUString.charAt(0);
let dezenas = numeroCDUString.charAt(1);
let unidades = numeroCDUString.charAt(2);
alert(
  `O seu número digitado tem ${centenas} centenas, ${dezenas} dezenas e ${unidades} unidades.`
);

// Exercício 6
let numeroCDU2 = parseInt(prompt("Digite seu número:"));
let numeroCDUString2 = numeroCDU.toString();
let numeroCDUStringReverse = numeroCDUString.split("").reverse().join("");
alert(numeroCDUStringReverse);

// Exercício 7
let numeroDaConta = parseInt(prompt("Digite seu número da conta corrente:"));
let numeroDaContaString = numeroDaConta.toString();
let numeroCDUReverse = numeroDaContaString.split("").reverse().join("");
let somaDeleMesmoEInverso = numeroDaConta + numeroCDUReverse;

// Falta terminar o restinho do Exercício 7