// Retorne no console todas as imagens do site

const allImages = document.querySelectorAll("img");
console.log(allImages);

allImages.forEach((img) => {
  console.log(img);
});

// Retorne apenas as imagens que começaram com a palavra imagem

const onlyImages = document.querySelectorAll('img[src^="img/imagem"]');
console.log(onlyImages);

onlyImages.forEach((img) => {
  console.log(img);
});

// Selecione todos os links internos (onde o href começa com #)

const internalLinks = document.querySelectorAll('a[href^="#"]');
console.log(internalLinks);

internalLinks.forEach((link) => {
  console.log(link);
});

// Selecione o primeiro h2 dentro de .animais-descricao

const firstH2 = document.querySelector(".animais-descricao h2");
console.log(firstH2);

// Selecione o ultimo p do site

const lastP = document.querySelectorAll("p");
console.log(lastP[lastP.length - 1]);
