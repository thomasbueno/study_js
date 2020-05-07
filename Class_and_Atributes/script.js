// adicione a classe ativo a todos os itens do menu

const activeMenu = document.querySelectorAll(".menu a");

activeMenu.forEach((item) => {
  item.classList.add("ativo");
});

// Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro

activeMenu.forEach((item) => {
  item.classList.remove("ativo");
});

activeMenu[0].classList.add("ativo");

// Verifique se as imagens possui o atributo alt

const checkImages = document.querySelectorAll("img");

checkImages.forEach((image, index) => {
  if (image.hasAttribute("alt")) {
    console.log(image, `A imagem ${index} possui o atributo alt`);
  } else {
    console.log(image, `A imagem ${index} NÃO possui o atributo alt`);
  }
});

// Modifique o href do link externo do menu

const externalLink = document.querySelector('a[href^="http"]');

externalLink.setAttribute("href", "https://www.google.com/");

console.log(externalLink);
