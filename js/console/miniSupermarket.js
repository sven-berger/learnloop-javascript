"use strict";

const ourProducts = {
  Brot: 1.89,
  Milch: 0.79,
  Schokolade: 0.99,
  Chips: 0.99,
  Apfel: 0.79,
};

const yourPurchasing = {};
let total = 0;
let deposit = 0;

function drawDeposit(total, deposit) {
  const newBalance = total - deposit;
  console.log(
    `Vielen Dank, Ihr Pfand (${deposit.toFixed(
      2
    )}€) habe ich abgezogen - Sie müssen nun noch ${newBalance.toFixed(
      2
    )}€ bezahlen.`
  );
}

console.log("Hallo und herzlich willkommen! Wie kann ich Ihnen weiterhelfen?");
const chooseAction = prompt("'Einkaufen' oder 'Pfand abgeben'?");

switch (chooseAction) {
  case "Pfand abgeben": {
    const canValue = 0.25;
    const canNumber = Number(prompt("Wieviele Dosen möchten Sie abgeben?"));

    if (canNumber > 0) {
      deposit = canNumber * canValue;

      const depositAction = prompt(
        `Vielen Dank, Ihr Pfandgeld beträgt: ${deposit.toFixed(
          2
        )}€ - Was möchten Sie damit machen? 'Auszahlen lassen' oder 'Mit Einkauf verrechnen'?`
      );

      switch (depositAction) {
        case "Auszahlen lassen":
          console.log(
            `Gerne doch - Hier sind Ihre gewünschten ${deposit.toFixed(
              2
            )}€ - Ich wünsche Ihnen noch einen schönen Tag.`
          );
          break;

        case "Mit Einkauf verrechnen":
          console.log(
            `Gerne doch, dann verrechnen wir die ${deposit.toFixed(
              2
            )}€ - Was möchten Sie denn gerne haben?`
          );
          chooseProduct();
          break;

        default:
          console.log(
            "Tut mir leid, bitte sagen Sie 'Auszahlen lassen' oder 'Mit Einkauf verrechnen'."
          );
      }
    } else {
      console.log("Sie hatten doch gar keinen Pfand dabei?!");
    }
    break;
  }

  case "Einkaufen":
    chooseProduct();
    break;

  default:
    console.log("Tut mir Leid, aber aktuell funktionieren die Kassen nicht.");
}

function chooseProduct() {
  const callProduct = prompt(
    "Was hätten Sie denn gerne? (Brot / Milch / Schokolade / Chips / Apfel)"
  );

  switch (callProduct) {
    case "Brot":
    case "Milch":
    case "Schokolade":
    case "Chips":
    case "Apfel": {
      const countProduct = Number(
        prompt(`${callProduct}? Gerne! Wieviele hätten Sie denn gerne?`)
      );

      if (countProduct > 0) {
        // Warenkorb: Menge setzen/erhöhen
        if (yourPurchasing[callProduct] === undefined) {
          yourPurchasing[callProduct] = countProduct;
        } else {
          yourPurchasing[callProduct] =
            yourPurchasing[callProduct] + countProduct;
        }

        // Summe live berechnen
        total = total + ourProducts[callProduct] * countProduct;

        const morePurchasing = prompt(
          `Vielen Dank, ${countProduct} x ${callProduct} hinzugefügt (Zwischensumme: ${total.toFixed(
            2
          )}€) - Darf es noch etwas anderes sein? (Ja / Nein / Einkaufswagen ansehen)?`
        );

        switch (morePurchasing) {
          case "Ja":
            chooseProduct();
            break;

          case "Nein":
            if (deposit > 0) {
              // Optional: Pfand deckt alles ab?
              if (deposit >= total) {
                console.log(
                  `Ihr Pfand (${deposit.toFixed(
                    2
                  )}€) deckt den Einkauf (${total.toFixed(
                    2
                  )}€) komplett ab. Restguthaben: ${(deposit - total).toFixed(
                    2
                  )}€`
                );
              } else {
                drawDeposit(total, deposit);
              }
            } else {
              console.log(`Vielen Dank, das macht dann: ${total.toFixed(2)}€`);
            }
            break;

          case "Einkaufswagen ansehen": {
            console.log(yourPurchasing);

            const orderAfterCard = prompt(
              "Möchten Sie noch etwas dazu kaufen? (Ja / Nein)"
            );

            switch (orderAfterCard) {
              case "Ja":
                chooseProduct();
                break;

              case "Nein":
                if (deposit > 0) {
                  if (deposit >= total) {
                    console.log(
                      `Ihr Pfand (${deposit.toFixed(
                        2
                      )}€) deckt den Einkauf (${total.toFixed(
                        2
                      )}€) komplett ab. Restguthaben: ${(
                        deposit - total
                      ).toFixed(2)}€`
                    );
                  } else {
                    drawDeposit(total, deposit);
                  }
                } else {
                  console.log(
                    `Vielen Dank, das macht dann: ${total.toFixed(2)}€`
                  );
                }
                break;

              default:
                console.log("Bitte 'Ja' oder 'Nein' eingeben.");
            }
            break;
          }

          default:
            console.log(
              "Bitte 'Ja', 'Nein' oder 'Einkaufswagen ansehen' eingeben."
            );
        }
      } else {
        console.log("Bitte geben Sie eine Menge größer als 0 ein.");
      }

      break;
    }

    default:
      console.log("Das Produkt habe ich leider nicht verstanden.");
  }
}
