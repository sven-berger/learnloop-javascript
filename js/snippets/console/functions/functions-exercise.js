"use strict";

const letter1 = Number(prompt("Bitte gib die erste Zahl ein: "));
const letter2 = Number(prompt("Bitte gib die zweite Zahl ein: "));

function calculations(i, j) {
  const a = letter1;
  const b = letter2;
  console.log(`${a} + ${b} ergibt:`);
  console.log(i + j);

  console.log("------");

  console.log(`${a} - ${b} ergibt:`);
  console.log(i - j);

  console.log("------");

  console.log(`${a} * ${b} ergibt:`);
  console.log(i * j);

  console.log("------");

  console.log(`${a} / ${b} ergibt:`);
  if (b === 0) {
    console.log("Durch 0 Teilen ist nicht erlaubt");
  } else {
    console.log(i / j);
  }

  console.log("------");

  console.log(`${a} % ${b} ergibt:`);
  console.log(i % j);
}

calculations(letter1, letter2);
