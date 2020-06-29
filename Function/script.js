// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragraphs = document.querySelectorAll("p");

const allCaracters = Array.prototype.reduce.call(
  paragraphs,
  (cont, paragraph) => {
    return cont + paragraph.innerText.length;
  },
  0
);

console.log(allCaracters);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function elementCreate(tag, classname, content) {
  const element = document.createElement(tag);
  classname ? element.classList.add(classname) : null;
  content ? (element.innerHTML = content) : null;

  return element;
}

console.log(elementCreate("li", "blue", "this content"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const titleH1 = elementCreate.bind(null, "h1", "titulo");

console.log(titleH1("any text"));
