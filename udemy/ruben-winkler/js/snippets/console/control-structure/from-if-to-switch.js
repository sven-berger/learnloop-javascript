"use strict";

const product = prompt("Welches Produkt benötigen Sie?");

if (product === "Brot") {
  console.log(`Das ${product} kostet: 1,89€`);
} else if (product === "Milch") {
  console.log(`Die ${product} kostet: 0,79€`);
} else if (product === "Schokolade" || product === "Chips") {
  if (product === "Schokolade") {
    console.log(`Die ${product} kostet: 0,99€`);
  } else {
    console.log(`Die ${product} kosten: 0,99€`);
  }
} else if (product === "Apfel") {
  console.log(`Ein ${product} kostet: 0,79€`);
} else {
  console.log(
    `Das tut mir Leid, aber das Produkt, was Sie suchen (${product}) führen wir nicht.`
  );
}

switch (product) {
  case "Brot":
    console.log(`Das ${product} kostet: 1,89€`);
    break;
  case "Milch":
    console.log(`Die ${product} kostet: 0,79€`);
    break;
  case "Schokolade":
  case "Chips":
    if (product === "Schokolade") {
      console.log(`Die ${product} kostet: 0,99€`);
    } else {
      console.log(`Die ${product} kosten: 0,99€`);
    }
    break;
  case "Apfel":
    console.log(`Ein ${product} kostet: 0,79€`);
    break;
  default:
    console.log(
      `Das tut mir Leid, aber das Produkt, was Sie suchen (${product}) führen wir nicht.`
    );
}
