"use stricts";

persons = ["Sebastian", "Marcel", "Anna", "Dennis", "Mia"];
const research = prompt("Bitte gib an, nach wen du suchen möchtest.");

// includes() sucht den Wert
// indexOf gibt den, wie der Name schon sagt, Index aus

function getPerson(research) {
  if (persons.includes(research)) {
  } else {
    return `Es tut mir Leid, aber eine Person namens "${research}" wurde in der Liste nicht gefunden`;
  }
}

console.log(getPerson(research));
