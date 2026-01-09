"use strict";

const let1 = 12;
// const let2 = 12;

function multiply(a, b = 13) {
  console.log(`Die erste Zahl lautet: ${a}`);
  console.log(`Der Default-Paramter von b lautet: ${b}`);
  console.log(`${a} * ${b} ergibt =`, a * b);
}

// multiply(let1, let2);
multiply(let1);

console.log("------");

function undefinedParameter(firstName, lastName, age = 34) {
  console.log(
    `Hallo! Mein Name ist ${firstName} Oliver ${lastName} und ich bin ${age} Jahre alt.`
  );
}

const firstName = "Sven";
const lastName = "Berger";

undefinedParameter(firstName, undefined);
