"use strict";

const account = {
  accountHolder: {
    firstName: "Sven Oliver",
    lastName: "Berger",
    gender: "Male",
    age: 34,
  },
  iban: "DE02120300000000202051",
  bic: "BYLADEM1001",
  balance: 3500,
  accountStatus: true,
};

const firstName = account["accountHolder"]["firstName"];

// Wert hinzufügen
account["withDrawalLimit"] = 500;

// Wert verändern
account["balance"] = 1000000;

// Warum wir diese jemals verwenden sollten - Die Vorteile sind wirklich gut..
const letter1 = Number(prompt("Bitte gib die erste Zahl an: "));
const letter2 = Number(prompt("Bitte gib die erste Zahl an: "));
const result = letter1 * letter2;
account["accountHolder"]["age"] = result;

console.log("------");

const exampleValue = "iban";
const wtf = account[exampleValue];
console.log(wtf);

console.log("------");

const fakeAccount = false;
account.accountStatus = fakeAccount;
console.log(account);
