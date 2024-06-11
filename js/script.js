// Declarar uma variável com o seu nome
// Declarar uma variável com a sua idade
// Declarar uma variável com a sua comida
// favorita e não atribuir valor

var nome = "Anderson",
  idade = 24,
  comidaFavorita;
// Atribuir valor a sua comida favorita
comidaFavorita = "Pizza";

// Declarar 5 variáveis diferentes sem valores
var bebida, sport, carro, cigarro, time;

console.log(nome, idade, comidaFavorita);

//================================================================================

// Declare uma variável contendo uma string
// Declare uma variável contendo um número dentro de uma string
// Declare uma variável com a sua idade

var nome = "Anderson",
  numero = "13",
  idade = 23;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = "Anderson",
  sobrenome = "Yoshimi",
  nomeSobrenome = `${nome} ${sobrenome}`;
console.log(nomeSobrenome);

var frase;

// Coloque a seguinte frase em uma variável: It's time
frase = "It's time";

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);

//================================================================================

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN
var soma1 = "nome",
  somaTotal = soma1 / 2;
console.log(somaTotal);

var soma2 = "frase",
  somaTotal2 = ++soma2;
console.log(somaTotal2);

// Somar a string '200' com o número 50 e retornar 250
var numero1 = "200",
  somaTotal3 = +numero1 + 50;
console.log(somaTotal3);

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
console.log(++incremento);

// Como dividir o peso por 2?
var numeroPeso = +"80" / 2;
var unidade = "kg";
var peso = `${numeroPeso} ${unidade}`;
console.log(peso);

var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao) {
  console.log("É verdadeiro");
  //var x = 10;
} else if (possuiDoutorado) {
  console.log("Possui doutorado");
} else {
  //console.log("É falso");
  console.log("Possui nada");
}
//console.log(x);

if (!possuiGraduacao) {
  console.log("Não possui graduação");
}

//================================================================================

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 30;
var idadeParente = 30;
if (minhaIdade > idadeParente) {
  console.log("É maior");
} else if (minhaIdade < idadeParente) {
  console.log("É menor");
} else {
  console.log("É igual");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
//true

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome0204 = "Andre";
var idade0204 = 28;
var possuiDoutorado0204 = false;
var empregoFuturo0204;
var dinheiroNaConta0204 = 0;

console.log(
  !!nome0204,
  !!idade0204,
  !!possuiDoutorado0204,
  !!empregoFuturo0204,
  !!dinheiroNaConta0204
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil possui mais habitantes");
} else {
  console.log("Brasil possui menos habitantes");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
