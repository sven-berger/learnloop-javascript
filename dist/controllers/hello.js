import { Controller } from "https://unpkg.com/@hotwired/stimulus?module";

export default class extends Controller {
  static targets = ["name", "output"];

  greet() {
    const name = this.nameTarget.value.trim();
    this.outputTarget.textContent = name
      ? `Hallo, ${name}!`
      : "Bitte Namen eingeben.";
  }
}
