// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const closeMenu = menu.cloneNode(true);

copy.appendChild(closeMenu);

// Selecione o primeiro <dt> da <dl> de Faq
const faq = document.querySelector(".faq");

const firstDt = faq.querySelector("dt");

// Selecione o <dd> referente ao primeiro <dt>
const nextDd = firstDt.nextElementSibling;

console.log(nextDd);

// Substitua o conteudo html de .faq pelo de .animais
const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
