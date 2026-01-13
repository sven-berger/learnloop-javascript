"use strict";

const myPerson = {
  name: "Sven Oliver Berger",
  age: 34,
  location: "Bad Camberg",
  job: {
    title: "Fachinformatiker für Anwendungsentwicklung",
    rank: "Prakikant",
  },
};

const myPersonDouble = {
  name: "Sven Oliver Berger",
  age: 34,
  location: "Bad Camberg",
  job: {
    title: "Fachinformatiker für Anwendungsentwicklung",
    rank: "Prakikant",
  },
};

const myDreamPerson = {
  name: "Loveday Isa Rohleder",
  age: 25,
  location: "Idstein",
  job: {
    title: "Einzelhandelskauffrau",
    rank: "Abteilungsleitung: MoPro",
  },
};

const myBoss = {
  name: "Tobias Klonk",
  age: 46,
  location: "Hofheim",
  job: {
    title: "Fachinformatiker für Anwendungsentwicklung",
    rank: "Geschäftsführung: WolkenWerk GmbH",
  },
};

console.log(myPerson == myPersonDouble);
console.log("------");
console.log(myDreamPerson == myBoss);

// Fazit: Der Vergleich wird niemals true ergeben, da kein Objekt lediglich das gleiche Objekt wie ein anderes sein kann, aber niemals dsa selbe.
// Nur das selbe Objekt würde "true" ergeben

// Man kann lediglich EIGENSCHAFTEN vergleichen
function compareAttributes() {
  console.log(
    "Sind die Eigenschaften aus 'myPerson' und myPersonDouble die gleichen?"
  );
  if (myPerson.name === myPersonDouble.name) {
    return `Ja, ${myPerson.name} und ${myPersonDouble.name} sind das gleiche`;
  } else {
    return `Nein, ${myPerson.name} und ${myPersonDouble.name} sind nicht das gleiche`;
  }
}

const message = compareAttributes();
console.log(message);
