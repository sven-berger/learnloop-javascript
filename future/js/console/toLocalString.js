"use strict";

let chooseLanguage = "";
const myDate = new Date();

let options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
};

const schemas = new Map();
schemas.set("Deutsch", myDate.toLocaleString("de-DE", options));
schemas.set("Englisch", myDate.toLocaleString("en-US", options)); // oder en-GB

while (
  chooseLanguage !== "Deutsch" &&
  chooseLanguage !== "Englisch" &&
  chooseLanguage !== "Alle Sprachen"
) {
  chooseLanguage = prompt(
    "Welche Sprache möchtest du auswählen? (Deutsch / Englisch / Alle Sprachen)",
  );
  if (schemas.has(chooseLanguage)) {
    console.log(
      `Für ${chooseLanguage} lautet das Datum aktuell: ${schemas.get(chooseLanguage)}`,
    );
  } else if (chooseLanguage === "Alle Sprachen") {
    schemas.forEach((value, key) => {
      console.log(`Für ${key} lautet das Datum aktuell: ${value}`);
    });
  } else {
    console.log(
      "Bitte gib exakt 'Deutsch' - 'Englisch' oder 'Alle Sprachen' ein.",
    );
  }
}
