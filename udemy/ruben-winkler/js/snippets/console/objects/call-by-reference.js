"use strict";

const myPerson = {
  age: 34,
};

function callByValue(object) {
  object.age = 135;
}

callByValue(myPerson);
console.log(callByValue);

console.log(myPerson.age);

// Call By Value bedeuet "Übergabe als Wert": Das gilt für primitive Datentypen (String, Number, Boolean)
