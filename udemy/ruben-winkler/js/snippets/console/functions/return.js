"use strict";

const letter1 = Number(prompt("Bitte gib die erste Zahl ein: "));
const letter2 = Number(prompt("Bitte gib die zweite Zahl ein: "));

function multiply(letter1, letter2) {
  return letter1 * letter2;
}

let result = multiply(letter1, letter2);
console.log(`${letter1} x ${letter2} ergibt: ${result}`);
