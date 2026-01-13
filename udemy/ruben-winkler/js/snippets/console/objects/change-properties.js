"use strict";

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

// Eigenschaften ändern
myCar.mileage = 10000;

// Eigenschaften hinfzufügen
myCar.color = "red";
myCar["electric"] = false;

// Eigenschaften TEMPORÄR entfernen
delete myCar.seatHeating;

console.log(myCar);
