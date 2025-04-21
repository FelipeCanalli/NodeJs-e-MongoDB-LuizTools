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

async function startRegistration() {
  console.clear();

  let name = await getAnswer("Insira o nome do cliente: ","Nome inválido, tente novamente",validateName);
  let address = await getAnswer("Insira o endereço do cliente: ","Endereço inválido, tente novamente",validateAddress);
  let age = Number.parseInt(await getAnswer("Insira a idade do cliente: ","Idade inválida, tente novamente",()=>{return true}));

  const id = db.addCustomers(name,address,age);
  console.log(`Cliente cadastrado com sucesso! \nCom ID: ${id}`);
  await rl.question("Pressione Enter para continuar...");
  printMenu();
}

async function listCustomers() {
  const customers = db.getCustomers();
  console.clear();
  console.log("Nome | Endereço | Idade")
  for(let i=0;i<customers.length;i++){
    console.log(`${customers[i].name} | ${customers[i].address} | ${customers[i].age}`);
  }
  await rl.question("\nPressione Enter para continuar...");
  printMenu();
}

async function printMenu() {
  console.clear();
  console.log("Menu: ")
  console.log(`1 - Cadastrar cliente\n2 - Ver Clientes\n3 - Encerrar`);

  var answer = await rl.question("Qual opção você deseja ? ");

  switch (answer) {
    case "1":
      startRegistration();
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
db.getCustomers;
