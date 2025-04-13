const numbers = [30, 10, 20, 11, 12,49,10,20,10,10,18];

function somatoria(numeros) {
  let result = 0;
  let i = 0;
  while (numeros[i] !== undefined) {
    result += numeros[i];
    i++;
  }
  return result;
}

console.log(somatoria(numbers));
