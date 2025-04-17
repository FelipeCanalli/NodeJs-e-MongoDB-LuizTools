const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

const customers = [];
customers[0] = { id: 0, name: "Felipe", address: "São Paulo" };

async function addCustomers() {
  console.clear();
  let name = await rl.question("Nome do cliente ? ");
  let address = await rl.question("Coloque o endereço: ");
  const id = customers.length > 0 ? customers[customers.length - 1].id + 1 : 1;
  customers.push({ id, name, address });
  console.log("Cliente cadastrado com sucesso !");
  await rl.question("Pressione Enter para continuar...");
  printMenu();
}

async function listCustomers() {
  console.log(customers);
  await rl.question("Pressione Enter para continuar...");
  printMenu();
}

async function printMenu() {
  console.clear();
  console.log(`Menu:
    1 - Cadastrar cliente
    2 - Ver Clientes
    3 - Encerrar`);

  var answer = await rl.question("Qual opção você deseja ? ");

  switch (answer) {
    case "1":
      addCustomers();
      break;
    case "2":
      listCustomers();
      break;
    case "3":
      console.clear();
      process.exit(0);
    default:
      console.log("Opção inválida");
  }

  await rl.question("Pressione enter para continuar.");
  printMenu();
}
printMenu();
