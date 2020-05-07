// Mostre no console cada parágrafo do site e o que está escrito.

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph, index) => {
  console.log(index, paragraph);
  console.log(paragraph.innerText);
});
