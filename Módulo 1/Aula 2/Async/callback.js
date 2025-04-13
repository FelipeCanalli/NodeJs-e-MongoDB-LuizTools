const fs = require("fs");

fs.writeFile("TestFile.txt", "Arquivo usando fs com retorno callback", () => {
  console.log("Terminou a escrita");
});
