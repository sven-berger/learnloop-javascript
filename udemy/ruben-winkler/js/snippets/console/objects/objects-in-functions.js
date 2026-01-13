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

function showDetails(account) {
  console.log(
    `Meine IBAN lautet: ${account.iban} und ich besitze ein Guthaben von ${account.balance}.`
  );
}

function removeStatus(account) {
  delete account.status;
}

function changeLastName(account) {
  const newLastName = prompt("Bitte geben Sie den neuen Nachnamen an:");
  account.accountHolder.lastName = newLastName;
  account["accountHolder"]["age"] = 28;
  removeStatus(account);
  console.log(account);
}

showDetails(account);
console.log("------");
changeLastName(account2);
