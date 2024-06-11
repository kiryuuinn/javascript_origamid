var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: "Anderson",
  sobrenome: "Yoshimi",
};
// Crie um método no objeto anterior, que mostre o seu nome completo

dados.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  late(ver) {
    if (ver === "homem") {
      return "Latir";
    } else {
      return null;
    }
  },
};

// nomeie 3 propriedades ou métodos de strings
var nome = "Anderson";
nome.length;
nome.toLowerCase;
nome.charAt;
console.log(nome.length, nome.toLowerCase(), nome.charAt(7));

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector(".btn");
btn.addEventListener;
btn.innerHTML;
btn.id;
btn.outerHTML;
btn.append;
// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
document.addEventListener("DOMContentLoaded", function () {
  var botao = document.querySelector(".btn");
  var copiar = "morango";
  botao.addEventListener("click", function () {
    var elementoTemporario = document.createElement("textarea");
    elementoTemporario.value = copiar;
    document.body.appendChild(elementoTemporario);

    elementoTemporario.select();
    elementoTemporario.setSelectionRange(0, 99999);

    document.execCommand("copy");
    document.body.removeChild(elementoTemporario);
    alert("Texto copiado para o Clipboard: " + copiar);
  });
});
