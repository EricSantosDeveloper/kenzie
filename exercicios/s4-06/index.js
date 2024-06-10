// Exercício 1

function soma(nota1, nota2, nota3, nota4) {
  let soma = nota1 + nota2 + nota3 + nota4;
  return soma;
}

function media(soma) {
  let media = soma / 4;
  return media;
}

alert("Bem vindo a calculadora do bimestre!");
let nota1 = parseInt(prompt("Digite a primeira nota:"));
let nota2 = parseInt(prompt("Digite a segunda nota:"));
let nota3 = parseInt(prompt("Digite a terceira nota:"));
let nota4 = parseInt(prompt("Digite a quarta nota:"));
alert(`A média final ficou em ${media(soma(nota1, nota2, nota3, nota4))}`);

// Exercício 2

function convertToCelsius(tipo, valor) {
  if (tipo == "fahrenheit") {
    let celsius = (valor - 32) / 1.8;
    return celsius;
  }

  if (tipo == "kelvin") {
    let celsius = valor - 273;
    return celsius;
  }

  if (tipo == "celsius") {
    return valor;
  }
}

function convertToFahrenheit(tipo, valor) {
  if (tipo == "celsius") {
    let fahrenheit = valor * 1.8 + 32;
    return fahrenheit;
  }

  if (tipo == "kelvin") {
    let fahrenheit = (valor - 273) * 1.8 + 32;
    return fahrenheit;
  }

  if (tipo == "fahrenheit") {
    return valor;
  }
}

function convertToKelvin(tipo, valor) {
  if (tipo == "celsius") {
    let kelvin = valor + 273;
    return kelvin;
  }

  if (tipo == "fahrenheit") {
    let kelvin = (valor - 32) * (5 / 9) + 273;
    return kelvin;
  }

  if (tipo == "kelvin") {
    return valor;
  }
}

alert("Bem vindo ao conversor de temperatura!");
let tipo = prompt(
  "Escreva em que tipo está a temperatura. Se está em celsius, fahrenheit ou kelvin."
);
let valor = parseInt(prompt("Agora digite qual o valor da temperatura:"));
let condicao = parseInt(
  prompt(
    "Agora escolha para qual você deseja converter. (1) para celsius, (2) para fahrenheit ou (3) para kelvin."
  )
);

let celsius = 1;
let fahrenheit = 2;
let kelvin = 3;

if (condicao === 1) {
  alert(`A conversão ficou em ${convertToCelsius(tipo, valor)} celsius.`);
} else if (condicao === 2) {
  alert(`A conversão ficou em ${convertToFahrenheit(tipo, valor)} fahrenheit.`);
} else if (condicao === 3) {
  alert(`A conversão ficou em ${convertToKelvin(tipo, valor)} kelvin.`);
} else {
  alert("Informe um número válido.");
}
