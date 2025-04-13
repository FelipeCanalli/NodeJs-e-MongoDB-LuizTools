/**
    1 - Crie dois objetos Pessoa e compare idades.
    2 - Adicione 10 pessoas em um Array.
    3 - Imprima o nome das pessoas do Array
 */

const sociedade = [];

for (i = 0; i < 10; i++) {
  let pessoa = {
    nome: "pessoa" + i,
    idade: parseInt(Math.random() * 80 + 18),
  };
  sociedade.push(pessoa);
}
console.log(sociedade);

if (sociedade[0].idade == sociedade[1].idade) {
  console.log("Idades iguais");
}

sociedade.forEach((pessoa) => {
  console.log(pessoa.nome);
});
