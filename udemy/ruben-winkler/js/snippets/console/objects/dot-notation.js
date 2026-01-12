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
  status: true,
};

const myCar = {
  brand: "Mercedes-Benz",
  fuelType: "Diesel",
  model: "C 292",
  mileage: 50000,
  facilities: {
    navigationSystem: true,
    airConditioning: true,
    seatHeating: false,
    cruiseControl: true,
    panoramicRoof: false,
  },
  condition: 3.4,
  price: 15499,
};

myCar.hs = 120;
myCar.brand = "BMW";

console.log(
  `Ein ${myCar.brand} ${myCar.model} hat ${myCar.hs} PS. (Ergibt keinen Sinn, ich weiß.)`
);

console.log("------");

let exampleValue = account.iban;
console.log("Die IBAN von Objekt: 'account':");
console.log(exampleValue);

console.log("------");

console.log(
  "Die Eigenschaft 'Temponat' aus der 'Austattungs'-Liste von Objekt: 'myCar':"
);
let exampleCruiseControl = myCar.facilities.cruiseControl;
console.log(exampleCruiseControl);

console.log("------");
console.log("Wert und/oder Eigenschaft hinzufügen");

// Wert und/oder Eigenschaft hinzufügen
const account2 = {
  iban: "DE02500105170137075030",
  bic: "INGDDEFF",
  balance: 1200,
  status: false,
  accountHolder: {
    firstName: "Loveday Isa",
    lastName: "Rohleder",
    gender: "Female",
    age: 25,
  },
};

/* Eigenschaften setzen */

//  (Abhebelimit: 500€)
account2.withDrawalLimit = 500;

// Werte setzen und/oder verändern
account2.age = 43;

console.log(account2);
