"use strict";

const firstName = prompt("Wie ist dein Vorname?");
const lastName = prompt("Wie ist dein Nachname?");
const age = Number(prompt("Wie alt bist du?"));

function getUserData(firstName, lastName, age) {
  console.log(
    `Hallo ${firstName} ${lastName}, schön das du da bist! Du bist ${age} Jahre alt.`
  );
}

getUserData(firstName, lastName, age);

function defaultUserData(firstName = "Hans", lastName = "Peter", age = 45) {
  console.log(
    `Hallo ${firstName} ${lastName}, es ist NICHT schön das du da bist! Du bist ${age} Jahre alt.`
  );
}

defaultUserData();
