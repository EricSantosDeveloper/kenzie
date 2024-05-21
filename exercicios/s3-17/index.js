// Exercício 1
let usuarioAutenticado = true;
if (usuarioAutenticado) {
  console.log("Seja bem-vindo!");
}

// Exercício 2
let usuario = "Ana";
let autenticado = false;
if (autenticado) {
  console.log(`Olá ${usuario}, você está autenticado.`);
} else {
  console.log(`Olá ${usuario}, você não está autenticado.`);
}

// Exercício 3
let produto = "maçã";
let quantidadeDoProduto = 2;
quantidadeFaltandoParaPromocao = 5 - quantidadeDoProduto;
if (produto === "maçã" && quantidadeDoProduto >= 5) {
  console.log("Você recebeu uma promoção, o valor do produto será R$ 5.00");
} else {
  console.log(
    `Se você adicionar mais ${quantidadeFaltandoParaPromocao}, o valor sairá por R$ 5.00`
  );
}
