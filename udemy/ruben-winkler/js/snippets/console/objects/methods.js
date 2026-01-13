"use strict";

const bankAccount = {
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

  depositMoney() {
    let depositService = Number(prompt("Wieviel Geld möchten Sie einzahlen?"));
    if (depositService >= 10000) {
      return `Das tut mir Leid, diese Summe (${depositService}€) muss aus gesetzlichen Gründen (Verdacht auf Geldwäsche) von einem Mitarbeiter durchgeführt werden!`;
    } else {
      this.balance += depositService;
      return `Vielen Dank, der Service wurde ausgeführt. Ihr neues Guthaben beträgt nun: ${this.balance}€`;
    }
  },

  withdrawMoney() {
    let drawService = Number(prompt("Wieviel Geld möchten Sie abheben?"));
    if (drawService > this.balance) {
      return `Es tut mir leid, aber Sie möchten mehr Geld abheben, als Sie besitzen. Sie können maximal ${this.balance}€ abheben.`;
    } else {
      this.balance -= drawService;
      return `Vielen Dank - Das Geld wurde abgebucht und Ihr neuer Kontostand beträgt nun: ${this.balance}€.`;
    }
  },

  getBalance() {
    return `Ihr aktuelles Guthaben beträgt: ${this.balance}€`;
  },
};

const savingsAccount = {
  balance: 200,
  accountStatus: true,

  depositMoney() {
    let depositService = Number(prompt("Wieviel Geld möchten Sie einzahlen?"));
    if (depositService >= 10000) {
      return `Das tut mir Leid, diese Summe (${depositService}€) muss aus gesetzlichen Gründen (Verdacht auf Geldwäsche) von einem Mitarbeiter durchgeführt werden!`;
    } else {
      this.balance += depositService;
      return `Vielen Dank, der Service wurde ausgeführt. Ihr neues Guthaben beträgt nun: ${this.balance}€`;
    }
  },

  withdrawMoney() {
    let drawService = Number(prompt("Wieviel Geld möchten Sie abheben?"));
    if (drawService > savingsAccount.balance) {
      return `Es tut mir leid, aber Sie möchten mehr Geld abheben, als Sie besitzen. Sie können maximal ${this.balance}€ abheben.`;
    } else {
      this.balance -= drawService;
      return `Vielen Dank - Das Geld wurde abgebucht und Ihr neuer Kontostand beträgt nun: ${this.balance}€.`;
    }
  },

  getBalance() {
    return `Ihr aktuelles Guthaben beträgt: ${this.balance}€`;
  },
};

console.log("Hallo und herzlich willkommen bei der Bank deines Vertrauens.");
const chooseAccount = prompt(
  "Auf welches Konto möchten Sie zugreifen? 'Girokonto' oder 'Sparkonto?'"
);

if (chooseAccount === "Girokonto") {
  const service = prompt(
    "Wie kann ich Ihnen weiterhelfen? Geld einzahlen, Geld abheben oder Kontostand abfragen?"
  );
  if (service === "Geld abheben") {
    const message = bankAccount.withdrawMoney();
    console.log(message);
  } else if (service === "Geld einzahlen") {
    const message = bankAccount.depositMoney();
    console.log(message);
  } else if (service === "Kontostand abfragen") {
    const message = bankAccount.getBalance();
    console.log(message);
  } else {
    console.log(
      "Tut mir Leid, ich habe Sie nicht verstanden - Bitte sagen Sie 'Geld einzahlen' - 'Geld abheben' oder 'Kontostand abfragen'"
    );
  }
} else if (chooseAccount === "Sparkonto") {
  const service = prompt(
    "Wie kann ich Ihnen weiterhelfen? Geld einzahlen, Geld abheben oder Kontostand abfragen?"
  );
  if (service === "Geld abheben") {
    const message = savingsAccount.withdrawMoney();
    console.log(message);
  } else if (service === "Geld einzahlen") {
    const message = savingsAccount.depositMoney();
    console.log(message);
  } else if (service === "Kontostand abfragen") {
    const message = savingsAccount.getBalance();
    console.log(message);
  } else {
    console.log(
      "Tut mir Leid, ich habe Sie nicht verstanden - Bitte sagen Sie 'Geld einzahlen' - 'Geld abheben' oder 'Kontostand abfragen'"
    );
  }
} else {
  console.log(
    "Tut mir Leid, ich habe Sie nicht verstanden - Bitte sagen Sie 'Girokonto' oder 'Sparkonto'"
  );
}
