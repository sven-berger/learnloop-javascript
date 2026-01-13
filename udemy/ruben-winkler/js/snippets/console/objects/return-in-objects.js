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
  const firstName = detail.accountHolder.firstName;
  const lastName = detail.accountHolder.lastName;
  const gender = detail.accountHoldergender;
  const age = detail.accountHolder.age;

  const completeName = `${firstName} ${lastName}`;
  const summaryPerson = `${completeName} ist ${age} Jahre alt und ${gender}`;
  const greetingPerson = `Hallo ${completeName}! Wie geht es dir?`;

  return completeName, summaryPerson, greetingPerson;
}

console.log(useData(account));
