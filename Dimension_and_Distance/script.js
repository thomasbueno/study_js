// Verifique a distancia da primeira imagem em relação ao topo da página

const imageDistance = document.querySelector("img");

console.log(
  `A distancia da primeira imagem para o topo é de: ${imageDistance.offsetTop}px`
);

// Retorne a soma da largura de todas as imagens

function sumWidthImages() {
  const images = document.querySelectorAll("img");

  let sum = 0;

  images.forEach((image) => {
    sum += image.offsetWidth;
  });

  console.log(sum);
}

window.onload = function () {
  sumWidthImages();
};

// Verifique se os links da pagina possuem o minimo recomendado para telas utilizadas com o dedo (48px x 48px)

const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;

  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "Possui acessibilidade !");
  } else {
    console.log(link, "Não possui boa acessibilidade !");
  }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia("(max-width: 720px)").matches;

if (browserSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
