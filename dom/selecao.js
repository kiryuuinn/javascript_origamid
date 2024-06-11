// Retorne no console todas as imagens do site
const retornaImg = document.querySelectorAll("img");
console.log(retornaImg);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const retornaImagem = document.querySelectorAll('img[src^="../assets/imagem"]');
console.log(retornaImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);

// Selecione o último p do site
const paragrafo = document.querySelectorAll("p");
console.log(paragrafo[paragrafo.length - 1]);
