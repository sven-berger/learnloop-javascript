"use strict";

const minAge = 18;
let yourAge = Number(prompt("Wie alt bist du?"));

console.log("Du kommst nur in den Club, wenn du mindestens 18 Jahre alt bist!");

if (yourAge >= minAge) {
  const goodAge = yourAge - minAge;
  console.log(
    `Du bist ${goodAge} Jahre älter als notwendig. Willkommen im Club.`
  );
}
