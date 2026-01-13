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

function withdrawMoney() {
  const drawService = Number(prompt("Wieviel Geld möchten Sie abheben?"));
  if (drawService > account.balance) {
    const notPossible = `Es tut mir leid, aber Sie möchten mehr Geld abheben, als Sie besitzen. Sie können maximal ${account.balance}€ abheben.`;
    console.log(notPossible);
  } else {
    account.balance -= drawService;
    console.log(
      `Vielen Dank - Das Geld wurde abgebucht und Ihr neuer Kontostand beträgt nun: ${account.balance}€.`
    );
  }
}

function depositMoney() {
  const depositService = Number(prompt("Wieviel Geld möchten Sie einzahlen?"));
  if (depositService >= 10000) {
    console.log(
      "Das tut mir Leid, diese Summe muss aus gesetzlichen Grüden (Verdacht auf Geldwäsche) von einem Mitarbeiter durchgeführt werden!"
    );
  } else {
    const newBalance = depositService + account.balance;
    account.balance = newBalance;
    console.log(
      `Vielen Dank, der Service wurde ausgeführt. Ihr neues Guthaben beträgt nun: ${newBalance}€`
    );
  }
}

function getBalance() {
  console.log(`Ihr aktuelles Guthaben beträgt: ${account.balance}€`);
}

console.log("Hallo und herzlich willkommen bei der Bank deines Vertrauens.");
const service = prompt(
  "Wie kann ich Ihnen weiterhelfen? Geld einzahlen, Geld abheben oder Kontostand abfragen?"
);

if (service === "Geld abheben") {
  withdrawMoney();
} else if (service === "Geld einzahlen") {
  depositMoney();
} else if (service === "Kontostand abfragen") {
  getBalance();
} else {
  console.log(
    "Tut mir Leid, ich habe Sie nicht verstanden - Bitte sagen Sie 'Geld einzahlen' - 'Geld abheben' oder 'Kontostand abfragen'"
  );
}
