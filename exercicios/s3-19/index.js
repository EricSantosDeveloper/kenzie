// // Exercício 1
// alert("Bem vindo a calculadora de quilowatts!");
// let salario = parseFloat(prompt("Digite o seu salário:"));
// let consumo = parseFloat(prompt("Digite a quantidade consumida de energia:"));
// let valorDoKW = salario / 7 / 100;
// let valorTotal = valorDoKW * consumo;
// alert(`O seu valor de cada KW é ${valorDoKW.toFixed(2)}`);
// alert(`O valor total a ser pago é ${valorTotal.toFixed(2)}`);
// let valorComDesconto = valorTotal * 0.9;
// alert(
//   `Se você pagar adiantado terá um desconto de 10%, ficando o valor de ${valorComDesconto.toFixed(
//     2
//   )}`
// );

// // Exercício 2
// alert("Bem vindo a calculadora de desconto para comerciantes!");
// alert("O desconto terá um valor pré-determinado de 9%.");
// let precoProduto = parseFloat(prompt("Digite o valor do produto:"));
// precoProdutoFinal = precoProduto * 0.91;
// alert(`O valor final com desconto é ${precoProdutoFinal}.`);

// // Exercício 3
// let a = 10;
// let b = 20;
// let aux;
// aux = a;
// a = b;
// b = aux;
// alert(
//   `Os valores originais de a e b: ${b}, ${a}. Após a troca são: ${a}, ${b}`
// );

// Exercício 4
alert("Bem vindo a calculadora para locadoras de vídeo!");
let quantidadeDeFitas = parseInt(prompt("Quantas fitas sua locadora possui?"));
let valorPorFita = parseFloat(
  prompt("Qual o valor cobrado por fita?").replace(",", ".")
);
alert(
  "Sabemos que um terço das fitas são alugadas por mês. Vamos calcular o faturamento anual de sua empresa."
);
let faturamentoMensal = (quantidadeDeFitas / 3) * valorPorFita;
let faturamentoAnual = faturamentoMensal * 12;
if (faturamentoAnual.length <=2) {
  alert(`O faturamento anual da locadora é de ${faturamentoAnual}.`);
} else {
  alert(
    `O faturamento anual da locadora é de aproximadamente ${faturamentoAnual.toFixed(
      2
    )}.`
  );
}
let multaPorAtraso = valorPorFita * 0.1;
let ganhosMensaisPorAtraso = quantidadeDeFitas * 0.1 * multaPorAtraso;
if (Number.isInteger(ganhosMensaisPorAtraso)) {
  alert(
    `Quando o cliente atrasa a entrega, é cobrada uma multa de 10% sobre o valor do aluguel. Sabendo que um décimo das fitas alugadas no mês são devolvidas com atraso, sua locadora está lucrando o valor de ${ganhosMensaisPorAtraso} por multas.`
  );
} else {
    alert(
        `Quando o cliente atrasa a entrega, é cobrada uma multa de 10% sobre o valor do aluguel. Sabendo que um décimo das fitas alugadas no mês são devolvidas com atraso, sua locadora está lucrando o valor de aproximadamente ${ganhosMensaisPorAtraso} por multas.`
      );
}

// Exercício 5

// Exercício 6

// Exercício 7
