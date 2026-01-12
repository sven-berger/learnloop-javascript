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

let key = "firstName";
account["accountHolder"][key] = "Hans Peter";

const firstName = account["accountHolder"]["firstName"];
const lastName = account["accountHolder"]["lastName"];
const gender = account["accountHolder"]["gender"];
const age = account["accountHolder"]["age"];

console.log(
  `Hallo! Mein Name ist ${firstName} ${lastName} - ${gender}, ${age} Jahre alt.`
);

console.log(
  `Meine Kontodaten sind: IBAN: ${account["iban"]} | BIC ${account["bic"]} - Das Konto ist ${account["accountStatus"]} und ich habe ${account["balance"]}€ auf dem Konto.`
);

// const fields = ["iban", "bic", "balance"];
// console.log(
//   `IBAN: ${account[fields[0]]} | BIC: ${account[fields[1]]} | Guthaben: ${account[fields[2]]}€`
// );
