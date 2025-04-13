function detectPalindromo(word) {
  let mirrorWord = word.toLowerCase().split("").reverse().join("");
  console.log(mirrorWord);
  if (word.toLowerCase() === mirrorWord) {
    return "Is a palindromo";
  } else {
    return "Isnt a palindromo";
  }
}

module.exports = {detectPalindromo};
