// const account1 = {
//   iban: "DE02120300000000202051",
//   bic: "BYLADEM1001",
//   balance: 3500,
//   status: true,
// };

// const account1Holder = {
//   firstName: "Sven Oliver",
//   lastName: "Berger",
//   gender: "Male",
//   age: 34,
// };

// const account2 = {
//   iban: "DE02500105170137075030",
//   bic: "INGDDEFF",
//   balance: 1200,
//   status: false,
// };

// const account2Holder = {
//   firstName: "Loveday Isa",
//   lastName: "Rohleder",
//   gender: "Female",
//   age: 25,
// };

// console.log(account1);
// console.log(account1Holder);
// console.log("------");
// console.log(account2);
// console.log(account2Holder);

// const account1Holder = {
//   firstName: "Sven Oliver",
//   lastName: "Berger",
//   gender: "Male",
//   age: 34,
// };

const account1 = {
  account1Holder: {
    firstName: "Sven Oliver",
    lastName: "Berger",
    gender: "Male",
    age: 34,
  },
  iban: "DE02120300000000202051",
  bic: "BYLADEM1001",
  balance: 3500,
  status: true,
};

console.log(account1);
console.log("------");

const account2Holder = {
  firstName: "Loveday Isa",
  lastName: "Rohleder",
  gender: "Female",
  age: 25,
};

const account2 = {
  iban: "DE02500105170137075030",
  bic: "INGDDEFF",
  balance: 1200,
  status: false,
  accountHolder: account2Holder,
};

console.log(account2);
