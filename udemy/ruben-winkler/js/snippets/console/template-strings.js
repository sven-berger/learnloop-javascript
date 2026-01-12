"use strict";

const myFirstName = prompt("Wie lautet nochmal mein Vorname?");
const myMiddleName = prompt("Habe ich einen Zweitnamen?");
const myLastName = prompt("Ehm.. Nachname?");
const myAge = prompt(
  "Da ich sehr alt bin, habe ich leider mein Alter vergessen..."
);
const myHome = prompt("Meine Heimat, Traumstadt und Grund zur Freude?");

const greeting = `Hallo! Mein Name ist ${myFirstName} ${myMiddleName} ${myLastName}, ich bin ${myAge} Jahre alt und wohne ab 01.02.2026 wieder in ${myHome}!`;
console.log(greeting);

const multiLineHello = "Hans Franz";
const multiLineHow = "Wie geht es dir?";

const multiLineTemplateString = `
Hallo ${multiLineHello}!

Ich habe nur eine Frage und zwar:

${multiLineHow}
`;

console.log(multiLineTemplateString);

const concatenatedTemplateString =
  `Hallo ${multiLineHello}! ` +
  `Ich habe da mal nur eine Frage: ` +
  `${multiLineHow}`;
console.log(concatenatedTemplateString);
