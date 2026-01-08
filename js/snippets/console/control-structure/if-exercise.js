minAge = 18;
yourAge = Number(prompt("Wie alt bist du?"));

if (yourAge >= minAge) {
  console.log("Du bist alt genug - Willkommen im Club!");
}

if (yourAge < minAge) {
  console.log("Du bist noch nicht alt genug!");
}
