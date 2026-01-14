"use strict";

const yourName = prompt("Wie ist dein Name?");

switch (yourName) {
  case "Sven":
    console.log(`Hallo ${yourName}`);
    break;

  case "Loveday":
    console.log(`Hallo ${yourName}`);
    break;

  default:
    console.log("Wer bist du? Ich kenne dich nicht.");
    break;
}

console.log("------");

const chooseFood = prompt("Bitte gib dein Lieblingsessen an:");

switch (chooseFood) {
  case "Nudeln":
  case "Pizza":
  case "Steak":
    console.log(`Ja, diese Nahrung (${chooseFood}) liebe ich auch!`);
    break;

  case "Fisch":
  case "Schafes Essen":
  case "Oliven":
    console.log(`Wüüüah, diese Nahrung (${chooseFood}) mag ich gar nicht.`);
    break;

  default:
    console.log(
      "Du hast einen komischen Sinn für Essen! Wähle gefälligst was Gescheites aus."
    );
    break;
}
