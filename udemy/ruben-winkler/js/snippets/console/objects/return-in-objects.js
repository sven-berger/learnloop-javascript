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

function useData(detail) {
  const completeName = `${detail.accountHolder.firstName} ${detail.accountHolder.lastName}`;
  const summaryPerson = `${completeName} ist ${detail.accountHolder.age} Jahre alt und ${detail.accountHolder.gender}`;
  const greetingPerson = `Hallo ${completeName}! Wie geht es dir?`;

  return {
    name: completeName,
    summary: summaryPerson,
    greeting: greetingPerson,
  };
}

console.log(useData(account));
console.log("------");
console.log(useData(account).name);
