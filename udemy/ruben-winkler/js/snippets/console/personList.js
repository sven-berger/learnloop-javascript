const persons = [];

function personForm() {
  const addPerson = prompt(
    "Bitte gib den Namen an, der der Liste hinzugefügt werden soll - Falls die Liste vollständig ist, sag 'Fertig'"
  );

  // Abbruch bei Cancel (optional, aber praktisch)
  if (addPerson === null) {
    console.log("Abgebrochen.");
    return;
  }

  // Leere Eingaben abfangen
  if (addPerson.length < 1) {
    console.log("Bitte gib einen gültigen Namen ein!");
    return personForm();
  }

  switch (addPerson) {
    case "Fertig": {
      const message = prompt(
        "Vielen Dank, dann sind wir jetzt vollständig, möchtest du die Liste sehen? (Ja / Nein)"
      );

      if (message === "Ja") {
        console.log(persons);
        const listComplete = prompt("Ist die Liste vollständig? (Ja / Nein)");
        switch (listComplete) {
          case "Ja":
            console.log("Gut, dann können wir jetzt starten");
            return; // <- hier beenden wir die Funktion wirklich
          case "Nein":
            console.log("Okay, dann fügen wir weiter hinzu.");
            return personForm(); // <- weiter machen
          default:
            console.log("Das war eine Ja oder Nein-Frage!");
            return personForm(); // <- nochmal fragen
        }
      } else if (message === "Nein") {
        console.log("Okay, dann nicht - Dann starten wir direkt");
        return;
      } else {
        console.log("Das war eine Ja oder Nein-Frage!");
        console.log(message);
      }
    }

    default:
      // normaler Name
      persons.push(addPerson);
      return personForm();
  }
}

personForm();
