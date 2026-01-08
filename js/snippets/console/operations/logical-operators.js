"use strict";

// Logisches "und" => &&
console.log("Ist 1 > 0 && 4 < 6?");
console.log(1 > 0 && 4 < 6);

console.log("------");

console.log("Ist 1 > 0 && 6 < 4?");
console.log(1 > 0 && 6 < 4);

console.log("------");

// Logisches "oder" => ||
console.log("Ist 1 > 0 || 6 < 4?");
console.log(1 > 0 || 6 < 4);

console.log("------");

console.log("Ist 1 > 0 || 6 < 4?");
console.log(1 > 0 || 6 < 4);

console.log("------");

// Logisches "nicht" => !
console.log("Ist 1 > 0 && !(6 < 4)?");
console.log(1 > 0 && !(6 < 4));

console.log("------");

console.log("Was ergibt '!true'?");
console.log(!true);

console.log("------");

// Weitere Beispiele
console.log("Ist 1 > 0 && 4 < 6 && 10 < 20?");
console.log(1 > 0 && 4 < 6 && 10 < 20);

console.log("------");

console.log("Ist 1 > 0 && 4 < 6 && 10 > 20?");
console.log(1 > 0 && 4 < 6 && 10 > 20);

console.log("------");
console.log("Ist 1 > 0 && 4 < 6 || 10 > 20?");
console.log((1 > 0 && 4 < 6) || 10 > 20);

console.log("------");
console.log("Ist 1 > 0 && 4 > 6 || 10 < 20?");
console.log((1 > 0 && 4 > 6) || 10 < 20);

console.log("------");
console.log("Ist 1 > 0 && 4 > 6 || 10 > 20?");
console.log((1 > 0 && 4 > 6) || 10 > 20);

console.log("------");
console.log("Ist 1 < 0 && 10 < 20 || 6 > 4?");
console.log((1 < 0 && 10 < 20) || 6 > 4);

console.log("------");
console.log("Ist 1 < 0 && (10 < 20 || 6 > 4)?");
console.log(1 < 0 && (10 < 20 || 6 > 4));
