"use strict";

let startNumber = 0;
let endNumber = 0;

let randomNumber = 0;
let yourNumber = 0;

function generateRandom(startNumber, endNumber) {
  startNumber = Number(prompt("Bitte wähle die Startzahl:"));
  endNumber = Number(prompt("Bitte wähle die Endzahl:"));

  if (Number.isNaN(startNumber) || Number.isNaN(endNumber)) {
    console.log("Bitte nur Zahlen eingeben!");
  } else if (startNumber >= endNumber) {
    console.log("Die Startzahl muss kleiner als die Endzahl sein!");
  } else {
    randomNumber =
      Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber;

    return randomNumber;
  }
}

function chooseYourNumber(yourNumber) {
  yourNumber = prompt("Bitte gib die Zahl an, mit der du raten möchtest!");
  return yourNumber;
}

function playTheGame(yourNumber, randomNumber) {
  yourNumber = Number(chooseYourNumber(yourNumber));
  if (yourNumber < randomNumber) {
    alert(`${yourNumber} ist zu niedrig! Du musst höher raten!`);
    return playTheGame(yourNumber, randomNumber);
  } else if (yourNumber > randomNumber) {
    alert(`${yourNumber} ist zu hoch! Du musst niedriger raten!`);
    return playTheGame(yourNumber, randomNumber);
  } else {
    let youWin = prompt(
      "Herzlichen Glückwunsch, du hast die richtige Zahl geraten! Lust auf eine neue Runde? (Ja / Nein)",
    );
    if (youWin === "Ja") {
      randomNumber = generateRandom(startNumber, endNumber);
      return playTheGame(yourNumber, randomNumber);
    } else {
      alert(
        "Vielen Dank für das Mitmachen! Dann wünsche ich dir noch einen schönen restlichen Tag.",
      );
    }
  }
}

generateRandom(startNumber, endNumber);
chooseYourNumber(yourNumber);
playTheGame(yourNumber, randomNumber);
