const letter1 = 10;
const letter2 = 20;
const operationLetter = 3;

// function addieren(10, 20) {
function addieren(letter1, letter2) {
  // Rechnet 10 (festgelegter letter1) + 20 (festgelegter letter2) und speichert das Ergebnis zwischen
  return letter1 + letter2;
}

// function multiplzieren (30, 3) {
function multiplizieren(result1, operationLetter) {
  // Rechnet 30 (Ergebnis aus result1) x 3 (festgelegter operationLetter) und speichert das Ergebnis zwischen
  return result1 * operationLetter;
}

const result1 = addieren(letter1, letter2); // = const result1 = 30;
const result2 = multiplizieren(result1, operationLetter); // const result2 = 30 (result1) x  3 (operationLetter)

console.log(
  `Wir rechnen ${result1} x ${operationLetter} und das ergibt: ${result2} `
);
