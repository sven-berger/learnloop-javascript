"use strict";

const letter1 = Number(prompt("Bitte gib die erste Zahl ein: "));
const letter2 = Number(prompt("Bitte gib die zweite Zahl ein: "));
const letter3 = Number(prompt("Bitte gib die dritte Zahl ein: "));

function multiply(letter1, letter2) {
  return letter1 * letter2;
}

let result = multiply(letter1, letter2);
console.log(`${letter1} x ${letter2} ergibt: ${result}`);

function multiplyTheMultiply(letter1, letter2) {
  return letter1 * letter2;
}

let result2 = multiplyTheMultiply(result, letter3);
console.log(`${result} x ${letter3} ergibt: ${result2}`);
