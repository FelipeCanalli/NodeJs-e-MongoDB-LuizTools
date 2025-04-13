const fs = require("fs/promises");

fs.writeFile("TestFile2.txt", "Arquivo número dois usando promises")
  .then(() => {
    return fs.writeFile("TestFile3.txt", "x");
  })
  .then(() => {
    console.log("Encerrou as duas escritas com sucesso");
  })
  .catch((err) => {
    console.log("Erro: " + err);
  });
