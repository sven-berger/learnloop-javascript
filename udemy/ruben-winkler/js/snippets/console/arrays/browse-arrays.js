"use stricts";

persons = ["Sebastian", "Marcel", "Anna", "Dennis", "Mia"];
const research = prompt("Bitte gib an, nach wen du suchen möchtest.");

function getPerson(research) {
  if (persons.includes(research)) {
    return `Ja, es gibt eine Person namens "${research}" in der Liste.`;
    retun;
  } else {
    return `Es tut mir Leid, aber eine Person namens "${research}" wurde in der Liste nicht gefunden`;
  }
}

console.log(getPerson(research));
