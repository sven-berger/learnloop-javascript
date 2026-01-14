"use strict";

console.log("Objekte in Arrays");
const accountAdministration = [
  [
    {
      accountHolder: {
        firstName: "Sven Oliver",
        lastName: "Berger",
        gender: "Male",
        age: 34,
      },
      iban: "DE02120300000000202051",
      bic: "BYLADEM1001",
      balance: 200,
      accountStatus: true,
    },
  ],
  [
    {
      accountHolder: {
        firstName: "Loveday Isa",
        lastName: "Rohleder",
        gender: "Female",
        age: 25,
      },
      iban: "DE02500105170137075030",
      bic: "INGDDEFF",
      balance: 10,
      accountStatus: true,
    },
  ],
  [
    {
      accountHolder: {
        firstName: "Tobias",
        lastName: "Klonk",
        gender: "Male",
        age: 46,
      },
      iban: "DE02300606010002474689",
      bic: "DAAEDEDD",
      balance: 10300,
      accountStatus: false,
    },
  ],
];

console.log(accountAdministration[0][0]["balance"]);
console.log("------");

// Unnötig, aber zum Lernen ist es gut..
const myAccount = accountAdministration[0][0];
console.log(
  `Die IBAN vom Kunden ${myAccount.accountHolder.firstName} ${myAccount.accountHolder.lastName} lautet: ${myAccount.iban}`
);

console.log("------");
console.log("Arrays in Objekten");

const theSupermarket = {
  ceo: {
    name: "Uwe Georg",
    numberMarkets: 7,
  },
  dryGoods: ["Müsli", "Staubsauger", "Nudeln", "Kartoffelpüree", "Tomatenmark"],
  chilledProducts: ["Frische Milch", "Joghurt", "Sahne", "Salami", "Pudding"],
  beverages: ["Cola", "Orangensaft", "Energydrink", "Wasser", "Apfelschorle"],
};

const ceoMarket = theSupermarket.ceo.numberMarkets;

console.log(theSupermarket.dryGoods[0]);
console.log(theSupermarket.chilledProducts[1]);
console.log(theSupermarket.beverages[3]);
console.log(
  `Der Inhaber des Supermarktes hat ${ceoMarket} Läden und heißt ${theSupermarket.ceo.name}`
);
