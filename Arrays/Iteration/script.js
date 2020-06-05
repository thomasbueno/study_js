// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const courses = document.querySelectorAll(".curso");
const arrayCourses = Array.from(courses);

const courseObjects = arrayCourses.map((course) => {
  const title = course.querySelector("h1").innerText;
  const description = course.querySelector("p").innerText;
  const classes = course.querySelector(".aulas").innerText;
  const hours = course.querySelector(".horas").innerText;

  return {
    title,
    description,
    classes,
    hours,
  };
});

console.log(courseObjects);

// Retorne uma lista com os
// números maiores que 100
const numbers = [3, 44, 333, 23, 122, 322, 33];

const arrayNumbers = numbers.filter((number) => number > 100);

console.log(arrayNumbers);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instruments = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const instrumentsTrue = instruments.some((instrument) => {
  return instrument === "Baixo";
});

console.log(instrumentsTrue);

// Retorne o valor total das compras
const shopping = [
  {
    item: "Banana",
    price: "R$ 4,99",
  },
  {
    item: "Ovo",
    price: "R$ 2,99",
  },
  {
    item: "Carne",
    price: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    price: "R$ 5,35",
  },
  {
    item: "Quejo",
    price: "R$ 10,60",
  },
];

const amount = shopping.reduce((cont, item) => {
  const priceClean = +item.price.replace("R$ ", "").replace(",", ".");

  return cont + priceClean;
}, 0);

console.log(amount);
