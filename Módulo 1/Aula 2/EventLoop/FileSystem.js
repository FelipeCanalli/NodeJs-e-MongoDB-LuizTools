// Observando funcionamento do Event loop

const fs = require('fs');

const templateString = "Constante adicionada"

fs.writeFile('TestFile.txt',`
Arquivo
${templateString}
#  
`,()=>console.log("A escrita terminou"));

console.log(1);
console.log(2);
console.log(3);