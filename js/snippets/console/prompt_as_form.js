const firstName = prompt("Wie lautet dein Vorname?");
const middleName = prompt("Hast du einen Zweitnamen? Falls ja: Wie lautet er?");
const lastName = prompt("Wie lautet dein Nachname?");
let yourName = firstName + " " + middleName + " " + lastName;
const birthday = prompt("Wie alt bist du?");

console.log("Hallo " + yourName + " - Du bist " + birthday + " Jahre alt");
