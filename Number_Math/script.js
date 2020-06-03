// Retorne um número aleatório
// entre 1050 e 2000

const randomNumber = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(randomNumber);

// Retorne o maior número da lista abaixo
const numbers = "4, 5, 20, 8, 9";

const arrayNumbers = numbers.split(", ");
const numberMax = Math.max(...arrayNumbers);

console.log(numberMax);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const priceList = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function cleanPrice(price) {
  price = +price.toUpperCase().replace("R$", "").trim().replace(",", ".");
  price = +price.toFixed(2);
  return price;
}

let sum = 0;
priceList.forEach((price) => {
  sum += cleanPrice(price);
});

console.log(
  sum.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
