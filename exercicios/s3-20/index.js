// Desafio Portaria

let nomeString = prompt("Digite seu nome:");
let idade = parseInt(prompt("Digite sua idade:"));
let estaAcompanhado = prompt(
  "Digite S para acompanhado ou N para não acompanhado:"
);
let estaAcompanhadoString = estaAcompanhado.toString().toUpperCase();

if (idade >= 18) {
  alert(`Entrada permitida para ${nomeString}: Valor integral.`);
} else if (estaAcompanhadoString === "S") {
  alert(`Percebemos que você está acompanhado: Conceder desconto.`);
} else {
  alert(`Entrada não está permitida para ${nomeString}eri: Menor de idade.`);
}
