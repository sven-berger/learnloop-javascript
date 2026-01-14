"use strict";

const persons = ["Sebastian", "Hans", "Peter", "Klara"];
console.log(persons);
console.log("------");

// Namen ändern
persons[3] = "Anna";
console.log(persons);
console.log("------");

// Personen ans Ende der Liste hinzufügen
persons.push("Herbert");
console.log(persons);

console.log("------");

// Personen an den Anfang der Liste hinzufügen
persons.unshift("Sven");
console.log(persons);

console.log("------");

// Das letzte Element (Personen) entfernen
persons.pop();
console.log(persons);

// Das erste Element (Person) entfernen
persons.shift();
console.log(persons);

// Über Umwege: Gezielt ein Element entfernen
persons.splice(3, 3);
console.log(persons);
