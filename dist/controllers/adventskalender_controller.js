import { Controller } from "https://unpkg.com/@hotwired/stimulus?module";

export default class extends Controller {
  static targets = ["door"];

  createDoor(number) {
    for (let i = 1; i <= 25; i++) {
      const door = document.createElement("div");
      door.classList.add("door");
      door.textContent = number;
      door.addEventListener("click", () => this.openDoor(number, door));
      return door;
    }
  }
}
