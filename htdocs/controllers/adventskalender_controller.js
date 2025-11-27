import { Controller } from "https://unpkg.com/@hotwired/stimulus?module";

export default class extends Controller {
  static targets = ["doorContainer"];

  connect() {
    try {
      this.createDoors();
    } catch (err) {
      console.error("Fehler beim Erzeugen der Türchen:", err);
    }
  }

  createDoors() {
    const calender = document.createElement("div");
    calender.className = "calender grid grid-cols-6 gap-3";

    for (let i = 1; i <= 24; i++) {
      const button = document.createElement("button");
      button.className =
        "door bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded";
      button.textContent = String(i);
      button.dataset.tag = String(i);

      calender.appendChild(button);
    }

    this.doorContainerTarget.appendChild(calender);
  }
}
