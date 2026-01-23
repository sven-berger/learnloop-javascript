"use strict";

let sentence;
let searchWord;
let replaceWord;

sentence = prompt("Bitte gib den Text ein, den du bearbeiten möchtest:");
searchWord = prompt(`Nach welchem Wort suchst du in dem Text "${sentence}"?`);
replaceWord = prompt(
  `Und mit welchem Wort soll "${searchWord}" ausgetauscht werden?`,
);

if (sentence.includes(searchWord)) {
  let foundSearchWord = sentence.indexOf(searchWord);
  console.log(
    `Vielen Dank, "${searchWord}" wurde an der ${foundSearchWord} gefunden.`,
  );
  let sentenceReplace = sentence.replace(searchWord, replaceWord, 0, 1000);

  console.log(
    `"${searchWord}" wurde erfolgreich mit "${replaceWord}" ausgetauscht!`,
  );
  console.log(`Der neue Satz heißt nun: "${sentenceReplace}"`);
} else {
  console.log(`Es wurde kein Eintrag mit "${searchWord}" gefunden.`);
}
