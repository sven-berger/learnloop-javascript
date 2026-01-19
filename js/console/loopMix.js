"use strict";

let startValue = 1;
let breakValue = null;
let endValue = 0;

function getEndValue() {
  endValue = Number(
    prompt("Bitte gib an, mit welcher Zahl du enden möchtest.")
  );

  if (Number.isNaN(endValue) || endValue <= 0) {
    console.log("Bitte eine gültige Zahl > 0 eingeben.");
    return getEndValue();
  } else {
    if (endValue > 50) {
      getBreakValue();
    } else {
      breakValue = null;
    }
    return endValue;
  }
}

function getBreakValue() {
  breakValue = Number(
    prompt("Bitte gib an, bei welcher Zahl du eine Pause machen möchtest.")
  );

  if (Number.isNaN(breakValue) || breakValue <= 0) {
    console.log("Bitte gib eine richtige Pause an!");
    return getBreakValue();
  }

  if (breakValue >= endValue) {
    console.log("Die Pause muss vor dem Ende kommen!");
    return getBreakValue();
  }

  if (breakValue > 50) {
    console.log(
      "Wir wollen ja mal nicht übertreiben - Bei 50 ist spätestens Pause!"
    );
    return getBreakValue();
  }

  return breakValue;
}

getEndValue();

for (let letter = startValue; letter <= endValue; letter++) {
  // Fall: keine Pause -> einfach normal mit for zählen
  if (breakValue === null) {
    console.log(letter);
    continue;
  }

  // Fall: Pause gewünscht -> ab hier übernimmt while das Zählen
  while (letter < breakValue) {
    console.log(letter);
    letter++;
  }

  // Jetzt sind wir bei breakValue
  if (letter === breakValue) {
    console.log(letter);
    console.log("Danke für deine Arbeit, es wird Zeit für eine Pause.");
  }

  // Weiter bis Ende, aber max. 100
  while (letter < endValue && letter < 100) {
    letter++;
    console.log(letter);
  }

  if (letter >= 100) {
    console.log("So, jetzt reicht es aber - Bei 100 ist Schluss!");
  }

  // Wichtig: for beenden, weil while die komplette Restarbeit gemacht hat
  break;
}
