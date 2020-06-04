const foods = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const firstValue = foods.shift();
const lastValue = foods.pop();

console.log(
  `O primeiro valor da array é ${firstValue} e o ultimo é ${lastValue}`
);

const lastValueAdd = foods.push("Arroz");
const firstValueAdd = foods.unshift("Peixe", "Batata");

console.log(foods);
const students = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

students.sort();
console.log(students);

students.reverse();
console.log(students);

console.log(students.includes("Joana"));
console.log(students.includes("Juliana"));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split("section");
html = html.join("ul");

html = html.split("div");
html = html.join("li");

console.log(html);

const cars = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const originalCars = cars.slice();

cars.pop();

console.log(cars);
console.log(originalCars);
