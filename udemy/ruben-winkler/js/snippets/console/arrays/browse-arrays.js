"use stricts";

persons = ["Sebastian", "Marcel", "Anna", "Dennis", "Mia"];
const research = prompt("Bitte gib an, nach wen du suchen möchtest.");

// includes() sucht den Wert
// indexOf gibt den, wie der Name schon sagt, Index aus
// lastindexOf (indexOf nur von hinten)

function getPerson(research) {
  if (persons.includes(research)) {
    return `Ja, es gibt eine Person namens "${research}" (Position ${persons.indexOf(
      research
    )}) in der Liste.`;
  } else {
    return `Es tut mir Leid, aber eine Person namens "${research}" wurde in der Liste nicht gefunden.`;
  }
}

console.log(getPerson(research));
