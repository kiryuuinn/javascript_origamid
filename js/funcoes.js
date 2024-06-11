// Crie uma função para verificar se um valor é Truthy

function Truthy(valor) {
  return !!valor;
}

//var isTruthy = Truthy(0);
console.log(Truthy(null));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
  return lado * 4;
}
var perimetroQuadrado = perimetro(4);
console.log(perimetroQuadrado);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobreome) {
  if (typeof nome === "string" && typeof sobreome === "string") {
    return `${nome} ${sobreome}`;
  } else {
    return "Você não digitou um nome.";
  }
}
var recebeNome = nomeCompleto("Anderson", "Yoshimi");
console.log(recebeNome);

// Crie uma função que verifica se um número é par

function even(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
  return typeof dado;
}
console.log(tipoDeDado(null));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("click", function () {
  console.log("Anderson Yoshimi");
});

// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
//   precisoVisitar(20);
//   jaVisitei(20);

console.log(precisoVisitar(20), jaVisitei(20));
