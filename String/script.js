// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transaction = [
  {
    description: "Taxa do Pão",
    value: "R$ 39",
  },
  {
    description: "Taxa do Mercado",
    value: "R$ 129",
  },
  {
    description: "Recebimento de Cliente",
    value: "R$ 99",
  },
  {
    description: "Taxa do Banco",
    value: "R$ 129",
  },
  {
    description: "Recebimento de Cliente",
    value: "R$ 49",
  },
];

let totalFee = 0;
let totalReceipt = 0;
transaction.forEach((item) => {
  const cleanNumber = +item.value.replace("R$ ", ""); // + na frente serve para transformar string em number
  if (item.description.slice(0, 4) === "Taxa") totalFee += cleanNumber;
  else totalReceipt += cleanNumber;
});

console.log(`R$${totalFee} Reais (TAXAS)`);
console.log(`R$${totalReceipt} Reais (DINHEIRO LIVRE)`);

// Retorne uma array com a lista abaixo
const transport = "Carro;Avião;Trem;Ônibus;Bicicleta";

const arrayTransport = transport.split(";");

console.log(arrayTransport);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split("span").join("a");
console.log(html);

// Retorne o último caracter da frase
const phrase = "Melhor do ano!";

console.log(phrase.slice(-1));

// Retorne o total de taxas
const transaction2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let totalFee2 = 0;

transaction2.forEach((item) => {
  item = item.toLowerCase().trim().slice(0, 4); // diminuir a letra.tirar espacamentos.pegar do indice 0 ao 4

  if (item === "taxa") totalFee2++;
});

console.log(totalFee2);
