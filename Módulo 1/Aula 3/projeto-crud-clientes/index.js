const db = require("./db");
const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

async function getAnswer(question, errorMessage, validationMessage) {
  let answer = "";
  do {
    answer = await rl.question(question);
    if (!validationMessage(answer)) console.log(errorMessage);
  } while (!validationMessage(answer));
  return answer;
}

function validateName(name) {
  if (!name) return false;
  if (name.trim().indexOf(" ") === -1) return false;
  return true;
}

function validateAddress(address) {
  if (!address) return false;
  return true;
}

function validateNameUpdate(name) {
  if (!name) return true;
  if (name.trim().indexOf(" ") === -1) return false;
  return true;
}

function validateAddressUpdate(address) {
  if (!address) return true;
  return true;
}

function validateId(id){
  return id >= 0;
}

async function startRegistration() {
  console.clear();

  let name = await getAnswer("Insira o nome do cliente: ","Nome inválido, tente novamente com nome e sobrenome",validateName);
  let address = await getAnswer("Insira o endereço do cliente: ","Endereço inválido, tente novamente",validateAddress);
  let age = Number.parseInt(await getAnswer("Insira a idade do cliente: ","Idade inválida, tente novamente",()=>{return true}));

  const id = db.addCustomers(name,address,age);
  console.log(`Cliente cadastrado com sucesso! \nCom ID: ${id}`);
  await rl.question("Pressione Enter para continuar...");
  printMenu();
}

async function startUpdate() {
  console.clear();

  let id = parseInt(await getAnswer("Qual o ID do cliente: ",
    "ID inválido",validateId));
  let name = await getAnswer("Insira o novo nome do cliente, deixe em branco para manter o mesmo: ",
    "Nome inválido, tente novamente",validateNameUpdate);
  let address = await getAnswer("Insira o endereço do cliente, deixe em branco para manter o mesmo ",
    "Endereço inválido, tente novamente",validateAddressUpdate);
  let age = Number.parseInt(await getAnswer("Insira a idade do cliente, deixe em branco para manter o mesmo: ",
    "Idade inválida, tente novamente",()=>{return true}));

  const result = db.updateCustomers(id, {name,address,age});
  if(result)
    console.log("\nCliente alterado com sucesso!");
  else
    console.log("\nCliente não encontrado");
  await rl.question("\nPressione Enter para continuar...");
  printMenu();
}

async function listCustomers() {
  const customers = db.getCustomers();
  console.clear();
  console.log("ID| Nome | Endereço | Idade")
  for(let i=0;i<customers.length;i++){
    console.log(`${customers[i].id} | ${customers[i].name} | ${customers[i].address} | ${customers[i].age}`);
  }
  await rl.question("\nPressione Enter para continuar...");
  printMenu();
}

async function printMenu() {
  console.clear();
  console.log("Menu: ")
  console.log("1 - Cadastrar cliente")
  console.log("2 - Ver Clientes");
  console.log("3 - Alterar Clientes");
  console.log("5 - Encerrar")

  var answer = await rl.question("\nQual opção você deseja ? ");

  switch (answer) {
    case "1":
      startRegistration();
      break;
    case "2":
      listCustomers();
      break;
    case "3":
      startUpdate();
      break;
    case "5":
      console.clear();
      process.exit(0);
    default:
      console.log("Opção inválida");
  }

  await rl.question("Pressione enter para continuar.");
  printMenu();
}
printMenu();
db.getCustomers();
