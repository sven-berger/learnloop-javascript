"use strict";

// index =  0 = Brot // 1 = Milch // 2 = Schokolade // 3 = Chips // 4 = Apfel
const products = ["Brot", "Milch", "Schokolade", "Chips", "Apfel"];

console.log(products[0]);
console.log(products[1]);
console.log(products[2]);
console.log(products[3]);
console.log(products[4]);

console.log("------");

// undefined
console.log("products[5] ergibt ein 'undefined'");
console.log(products[5]);
console.log("------");

// Vergleich: Objekt und Array
console.log("Vergleich: Objekt und Array");
const products_object = {
  0: "Brot",
  1: "Milch",
  2: "Schokolade",
  3: "Chips",
  4: "Apfel",
};

console.log(products);
console.log("------");
console.log(products_object);
console.log("------");

// Eigenschaften aus Array ausgeben
console.log("Einen bestimmten Index ausgeben");
console.log(products.length - 1);

// Eigenschaften aus Array ausgeben
console.log("Einen bestimmten Value, anhand des Index ausgeben");
console.log(products[products.length - 1]);
