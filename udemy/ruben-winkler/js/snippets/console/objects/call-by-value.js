"use strict";

const myJob = "Fachinformatiker für Anwendungsentwicklung";

function callByValue(variable) {
  variable = "Praktikant bei WolkenWerk GmbH";
}

callByValue(myJob);
console.log(callByValue);

console.log(myJob);

// Call By Value bedeuet "Übergabe als Wert": Das gilt für primitive Datentypen (String, Number, Boolean)
